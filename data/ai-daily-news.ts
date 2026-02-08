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
        title: "Kimi K2.5 Agent 助力高效办公: Excel 处理能力提升",
        date: "2026-02-08",
        description: "Kimi 智能助手发布 K2.5 版本，大幅增强了 Excel 文件处理和数据分析能力，支持复杂公式和图表生成。",
        hot: true,
        tags: ["Kimi", "Agent", "Productivity"]
    },
    {
        id: 2,
        title: "OpenAI 拟开发“仅限真人”的社交媒体新格局",
        date: "2026-02-07",
        description: "OpenAI 计划推出基于 World ID 的社交平台，旨在构建一个确信无 AI 机器人的纯人类交流空间。",
        hot: true,
        tags: ["OpenAI", "Social Media", "World ID"]
    },
    {
        id: 3,
        title: "Optimus 3 一季度发，马斯克：比中指功能已上线",
        date: "2026-02-06",
        description: "特斯拉人形机器人 Optimus 第三代即将发布，手部灵活性显著提升，甚至可以做出复杂的手势。",
        hot: false,
        tags: ["Tesla", "Robotics", "Musk"]
    },
    {
        id: 4,
        title: "谷歌 Gemini 3.5 泄露：代号 Snow Bunny",
        date: "2026-02-05",
        description: "据爆料，Google 下一代多模态模型 Gemini 3.5 代号“Snow Bunny”，在推理和代码生成方面有重大突破。",
        hot: false,
        tags: ["Google", "Gemini", "Leak"]
    },
    {
        id: 5,
        title: "Meta 步入“交付年”，超级智能实体眼镜曝光",
        date: "2026-02-04",
        description: "Meta 扎克伯格宣布 2026 年为“交付年”，并展示了代号“Orion”的 AR 眼镜原型，支持全息显示。",
        hot: false,
        tags: ["Meta", "AR", "Wearables"]
    },
    {
        id: 6,
        title: "三星 2025 年 Q4 营业利润腰斩，AI芯片供不应求",
        date: "2026-02-03",
        description: "受半导体周期影响，三星电子 Q4 财报不及预期，但 HBM 内存需求强劲，产能已排满至明年。",
        hot: false,
        tags: ["Samsung", "Chips", "Financial"]
    },
    {
        id: 7,
        title: "Google Chrome 迎来 Gemini “自动浏览”时代",
        date: "2026-02-02",
        description: "Chrome 浏览器即将内置 Gemini Nano 模型，支持本地网页总结、自动填写表单和智能导航功能。",
        hot: false,
        tags: ["Google", "Chrome", "Gemini"]
    },
];
