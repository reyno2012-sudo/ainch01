from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return """
    <h1>Welcome to AI Nexus API</h1>
    <p>Try these endpoints:</p>
    <ul>
        <li><a href="/api/hello">/api/hello</a></li>
        <li><a href="/api/time">/api/time</a></li>
    </ul>
    """

@app.route('/api/hello')
def hello_world():
    return {"message": "Hello from Flask!"}

@app.route('/api/time')
def get_time():
    import time
    return {"time": time.time()}

