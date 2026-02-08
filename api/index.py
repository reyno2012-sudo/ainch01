from flask import Flask, jsonify, request
import requests
import os
import json
from supabase import create_client, Client
from datetime import datetime

app = Flask(__name__)

# Initialize Supabase client
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: Client = create_client(url, key) if url and key else None

@app.route('/api/hello')
def hello_world():
    return {"message": "Hello from Flask!"}

@app.route('/api/time')
def get_time():
    import time
    return {"time": time.time()}

@app.route('/api/sync-news')
def sync_news():
    if not supabase:
        return jsonify({"error": "Supabase credentials not configured"}), 500

    try:
        # 1. Fetch from GitHub
        github_repo_url = "https://api.github.com/repos/justlovemaki/Hextra-AI-Insight-Daily/contents/"
        headers = {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "AI-News-Sync-Bot"
        }
        
        # Add GitHub token if available
        github_token = os.environ.get("GITHUB_TOKEN")
        if github_token:
            headers["Authorization"] = f"token {github_token}"

        response = requests.get(github_repo_url, headers=headers)
        response.raise_for_status()
        files = response.json()

        # Filter for markdown files and sort by name (date) descending to get latest
        md_files = [f for f in files if f['name'].endswith('.md') and f['type'] == 'file']
        md_files.sort(key=lambda x: x['name'], reverse=True)

        if not md_files:
            return jsonify({"message": "No news files found"}), 200

        # Get the latest 5 files
        latest_files = md_files[:5]
        synced_count = 0

        for file_info in latest_files:
            # Fetch file content
            content_response = requests.get(file_info['download_url'])
            content = content_response.text

            # Parse content (Simple parsing assumption: Title is first line, content is rest)
            lines = content.split('\n')
            title = lines[0].strip().replace('#', '').strip()
            # Extract date from filename (assuming YYYY-MM-DD.md format or similar)
            # If not parseable, use current date or file date
            try:
                date_str = file_info['name'].replace('.md', '')
                # Validate date format if needed, or just store as string
            except:
                date_str = datetime.now().strftime('%Y-%m-%d')

            description = '\n'.join(lines[1:]).strip()[:500] # Limit description length
            
            # Construct news item
            news_item = {
                "title": title,
                "url": file_info['html_url'], # Use GitHub URL as unique ID/Link
                "date": date_str,
                "description": description,
                "tags": ["AI", "Daily"], # consistent with existing structure
                "created_at": datetime.utcnow().isoformat()
            }

            # Upsert to Supabase
            # Conflict on 'url' to avoid duplicates
            data, count = supabase.table('ai_news').upsert(news_item, on_conflict='url').execute()
            synced_count += 1

        return jsonify({
            "message": f"Successfully synced {synced_count} news items",
            "latest_files": [f['name'] for f in latest_files]
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/news')
def get_news():
    if not supabase:
        return jsonify({"error": "Supabase credentials not configured"}), 500

    try:
        # Fetch latest news from Supabase
        response = supabase.table('ai_news').select("*").order('date', desc=True).limit(20).execute()
        return jsonify(response.data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
