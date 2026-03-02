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
    "id": 1,
    "title": "NVIDIA发布新代Thor-2芯片",
    "date": "2026-03-01",
    "description": "NVIDIA推出新一代Thor-2 AI芯片，性能较上一代提升3倍，支持万亿参数模型实时推理",
    "hot": true,
    "tags": [
      "NVIDIA",
      "AI芯片",
      "硬件"
    ]
  },
  {
    "id": 2,
    "title": "Vista8爆料AI实时视频黑科技",
    "date": "2026-03-01",
    "description": "Vista8团队曝光最新AI实时视频技术，可实现4K 60fps视频的实时生成和编辑",
    "hot": true,
    "tags": [
      "Vista8",
      "AI视频",
      "黑科技"
    ]
  },
  {
    "id": 3,
    "title": "Gemini 3.1惊曝AI对齐生存论",
    "date": "2026-03-01",
    "description": "Google Gemini 3.1模型提出全新AI对齐理论，强调生存本能在AI安全中的重要性",
    "hot": true,
    "tags": [
      "Google",
      "Gemini",
      "AI对齐"
    ]
  },
  {
    "id": 4,
    "title": "图灵奖得主LeCun公开辣评驳偏见",
    "date": "2026-03-01",
    "description": "图灵奖得主Yann LeCun公开驳斥AI偏见论，认为当前AI系统的偏见源于训练数据而非模型本身",
    "hot": false,
    "tags": [
      "LeCun",
      "图灵奖",
      "AI伦理"
    ]
  },
  {
    "id": 5,
    "title": "大神自建13代理互审AI团队",
    "date": "2026-03-01",
    "description": "独立开发者创建由13个AI代理组成的互审团队，通过多轮交叉验证提升AI输出质量",
    "hot": false,
    "tags": [
      "AI代理",
      "开发",
      "创新"
    ]
  },
  {
    "id": 6,
    "title": "Woxi：Rust重塑Mathematica神器",
    "date": "2026-03-01",
    "description": "Woxi项目使用Rust语言重写Mathematica核心引擎，性能提升10倍，内存占用降低60%",
    "hot": false,
    "tags": [
      "Rust",
      "Mathematica",
      "编程"
    ]
  }
];