export interface NewsItem {
    id: number;
    title: string;
    date: string;
    description?: string;
    url?: string;
    hot?: boolean;
    tags?: string[];
}

export const aiDailyNews: NewsItem[] = [
  {
    id: 1,
    title: "NVIDIA 发布 Cosmos 3，开放面向物理 AI 的世界基础模型",
    date: "2026-06-02",
    description: "NVIDIA 在 GTC Taipei 推出 Cosmos 3，把视觉推理、世界生成和动作预测整合进开放模型体系，重点面向机器人、自动驾驶和合成数据训练。",
    url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Cosmos-3-the-Open-Frontier-Foundation-Model-for-Physical-AI/default.aspx",
    hot: true,
    tags: ["NVIDIA", "Physical AI", "World Model"]
  },
  {
    id: 2,
    title: "MiniMax 发布 M3：1M 上下文、原生多模态与代码智能体能力合一",
    date: "2026-06-02",
    description: "MiniMax M3 主打前沿编程、百万级上下文窗口、原生多模态和智能体能力，国内大模型竞争继续向长上下文与 agentic workflow 集中。",
    url: "https://www.minimax.io/blog/minimax-m3",
    hot: true,
    tags: ["MiniMax", "M3", "Agent"]
  },
  {
    id: 3,
    title: "Anthropic 秘密递交 IPO 文件，近万亿美元估值进入公开市场倒计时",
    date: "2026-06-02",
    description: "据 AP 与 TechCrunch 报道，Anthropic 已向 SEC 秘密递交上市文件；这让 Claude 背后的公司成为 AI 资本市场最受关注的 IPO 候选之一。",
    url: "https://apnews.com/article/572bb6cc12053c7aa95f775285cf4b73",
    hot: true,
    tags: ["Anthropic", "IPO", "Claude"]
  },
  {
    id: 4,
    title: "NVIDIA RTX Spark Superchip 押注 AI PC，Windows 电脑走向本地智能体",
    date: "2026-06-02",
    description: "NVIDIA 在 Computex 展示面向笔记本和台式机的 RTX Spark Superchip，结合 Arm CPU、Blackwell GPU 与统一内存，试图把高参数模型和长期任务带到本地 PC。",
    url: "https://apnews.com/article/c807f7333b93b9927b62b1240dcf65a1",
    hot: true,
    tags: ["NVIDIA", "AI PC", "Computex"]
  },
  {
    id: 5,
    title: "Alphabet 计划融资 800 亿美元，加速 AI 基础设施扩张",
    date: "2026-06-02",
    description: "Alphabet 宣布计划通过股票销售筹集最高 800 亿美元，用于满足 AI 产品和云服务的算力需求；其中包含 Berkshire Hathaway 的 100 亿美元私募投资。",
    url: "https://www.axios.com/2026/06/01/alphabet-80-billion-ai-buildout",
    hot: false,
    tags: ["Alphabet", "AI Infrastructure", "Cloud"]
  },
  {
    id: 6,
    title: "佛罗里达州起诉 OpenAI 与 Sam Altman，AI 安全责任进入州级诉讼阶段",
    date: "2026-06-02",
    description: "佛罗里达州总检察长起诉 OpenAI 和 Sam Altman，指控其在面向公众推广 ChatGPT 时隐瞒严重风险；这是美国州政府层面对 OpenAI 的标志性诉讼。",
    url: "https://apnews.com/article/396d70c5a2d9bae7e95a8ee9adaef836",
    hot: false,
    tags: ["OpenAI", "AI Safety", "Regulation"]
  },
  {
    id: 7,
    title: "Meta AI 客服机器人被曝可协助劫持 Instagram 账号，AI 支持流程安全受质疑",
    date: "2026-06-02",
    description: "多家安全媒体报道，攻击者通过诱导 Meta AI Support Assistant 修改账号邮箱，曾接管高知名度 Instagram 账号；事件凸显 AI 客服接入账户恢复流程的高风险。",
    url: "https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/",
    hot: false,
    tags: ["Meta", "Security", "AI Support"]
  }
];
