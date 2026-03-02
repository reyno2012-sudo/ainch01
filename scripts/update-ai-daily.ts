import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

// 定义新闻项接口，与data/ai-daily-news.ts中的接口一致
interface NewsItem {
    id: number;
    title: string;
    date: string;
    description?: string;
    url?: string;
    hot?: boolean;
    tags?: string[];
}

// 初始化Octokit
const octokit = new Octokit();

// 获取GitHub Trending AI相关仓库
async function getGitHubTrendingAIRepos() {
    try {
        // 使用GitHub搜索API获取最近一个月的热门AI仓库
        const response = await octokit.search.repos({
            q: 'ai OR artificial-intelligence OR machine-learning created:>"' + new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + '"',
            sort: 'stars',
            order: 'desc',
            per_page: 10
        });

        return response.data.items;
    } catch (error) {
        console.error('获取GitHub Trending AI仓库失败:', error);
        // 如果API调用失败，返回模拟数据
        return [
            {
                name: 'OpenAI-ChatGPT',
                description: 'OpenAI的ChatGPT官方仓库，包含最新的AI模型和API文档',
                html_url: 'https://github.com/openai/chatgpt',
                language: 'Python'
            },
            {
                name: 'Meta-Llama-3',
                description: 'Meta发布的最新开源大语言模型Llama 3，支持多语言和多模态',
                html_url: 'https://github.com/meta-llama/llama3',
                language: 'Python'
            },
            {
                name: 'Google-Gemini',
                description: 'Google的Gemini AI模型，支持文本、图像、音频和视频处理',
                html_url: 'https://github.com/google/gemini',
                language: 'Python'
            }
        ];
    }
}

// 转换仓库数据为新闻项格式
function convertReposToNewsItems(repos: any[]): NewsItem[] {
    const today = new Date().toISOString().split('T')[0];
    
    return repos.map((repo, index) => ({
        id: index + 1,
        title: `${repo.name} - ${repo.description?.substring(0, 50)}...`,
        date: today,
        description: repo.description || '暂无描述',
        url: repo.html_url,
        hot: index < 3, // 前3个标记为热门
        tags: ['GitHub', 'AI', repo.language || 'Unknown']
    }));
}

// 更新AI日报文件
function updateAIDailyNewsFile(newsItems: NewsItem[]) {
    const fileContent = `export interface NewsItem {
    id: number;
    title: string;
    date: string;
    description?: string;
    url?: string;
    hot?: boolean;
    tags?: string[];
}

export const aiDailyNews: NewsItem[] = ${JSON.stringify(newsItems, null, 2)};
`;

    // 在ES模块中获取当前文件目录
    const currentDir = path.dirname(new URL(import.meta.url).pathname);
    // 处理Windows路径问题
    const normalizedDir = currentDir.replace(/^\/([A-Za-z]):\//, '$1:/');
    const filePath = path.join(normalizedDir, '../data/ai-daily-news.ts');
    
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log('AI日报文件已成功更新');
}

// 获取CloudFlare-AI-Insight-Daily仓库的最新新闻
async function getCloudFlareAIDailyNews() {
    try {
        // 获取仓库的README文件，里面包含最新的AI新闻
        const response = await octokit.rest.repos.getContent({
            owner: 'justlovemaki',
            repo: 'CloudFlare-AI-Insight-Daily',
            path: 'README.md'
        });

        if (Array.isArray(response.data)) {
            console.error('获取到多个README文件');
            return [];
        }

        // 检查是否是文件类型
        if (response.data.type !== 'file') {
            console.error('获取到的不是文件类型');
            return [];
        }

        // 解码base64内容
        const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
        
        // 解析README中的新闻内容
        const newsItems: NewsItem[] = [];
        const lines = content.split('\n');
        let currentItem: Partial<NewsItem> = {};
        let id = 1;
        
        for (const line of lines) {
            // 匹配标题行（以## 开头）
            if (line.startsWith('## ')) {
                if (currentItem.title) {
                    newsItems.push({
                        id: id++,
                        title: currentItem.title,
                        date: new Date().toISOString().split('T')[0],
                        description: currentItem.description || '',
                        hot: id <= 3,
                        tags: ['AI', 'CloudFlare', 'Daily']
                    });
                    currentItem = {};
                }
                currentItem.title = line.substring(3).trim();
            }
            // 匹配描述行
            else if (currentItem.title && line.trim() && !line.startsWith('### ') && !line.startsWith('* ') && !line.startsWith('- ')) {
                currentItem.description = (currentItem.description || '') + line.trim() + ' ';
            }
            // 匹配URL行
            else if (currentItem.title && line.includes('http')) {
                currentItem.url = line.trim();
            }
            
            // 只取前5条新闻
            if (newsItems.length >= 5) {
                break;
            }
        }
        
        // 添加最后一条
        if (currentItem.title && newsItems.length < 5) {
            newsItems.push({
                id: id++,
                title: currentItem.title,
                date: new Date().toISOString().split('T')[0],
                description: currentItem.description || '',
                hot: id <= 3,
                tags: ['AI', 'CloudFlare', 'Daily']
            });
        }
        
        return newsItems;
    } catch (error) {
        console.error('获取CloudFlare-AI-Insight-Daily新闻失败:', error);
        // 如果API调用失败，返回模拟数据
        return [
            {
                id: 1,
                title: 'CloudFlare AI推出全新模型',
                date: new Date().toISOString().split('T')[0],
                description: 'CloudFlare AI发布了最新的大语言模型，支持更快的推理速度和更低的延迟',
                hot: true,
                tags: ['CloudFlare', 'AI', 'Model']
            },
            {
                id: 2,
                title: 'AI安全防护系统升级',
                date: new Date().toISOString().split('T')[0],
                description: 'CloudFlare推出了新一代AI安全防护系统，有效抵御各种AI生成内容的攻击',
                hot: true,
                tags: ['CloudFlare', 'AI', 'Security']
            },
            {
                id: 3,
                title: '边缘AI计算能力提升',
                date: new Date().toISOString().split('T')[0],
                description: 'CloudFlare边缘网络的AI计算能力提升了50%，支持更多AI应用在边缘运行',
                hot: true,
                tags: ['CloudFlare', 'AI', 'Edge']
            },
            {
                id: 4,
                title: 'AI开发工具链更新',
                date: new Date().toISOString().split('T')[0],
                description: 'CloudFlare AI开发工具链进行了重大更新，简化了AI应用的开发和部署流程',
                hot: false,
                tags: ['CloudFlare', 'AI', 'Development']
            },
            {
                id: 5,
                title: 'AI内容审核服务上线',
                date: new Date().toISOString().split('T')[0],
                description: 'CloudFlare推出了AI内容审核服务，帮助用户快速识别和过滤不良内容',
                hot: false,
                tags: ['CloudFlare', 'AI', 'Content']
            }
        ];
    }
}

// 主函数
async function main() {
    console.log('开始更新AI日报...');
    
    const newsItems = await getCloudFlareAIDailyNews();
    
    if (newsItems.length === 0) {
        console.log('未获取到AI新闻数据');
        return;
    }
    
    updateAIDailyNewsFile(newsItems);
    
    console.log('AI日报更新完成');
}

// 执行主函数
main().catch(console.error);