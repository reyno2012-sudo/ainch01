'use client';

import { Flame, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
    { id: 1, title: "Kimi K2.5 Agent 助力高效办公: Excel 处理能力提升", hot: true },
    { id: 2, title: "OpenAI 拟开发“仅限真人”的社交媒体新格局", hot: true },
    { id: 3, title: "Optimus 3 一季度发，马斯克：比中指功能已上线", hot: false },
    { id: 4, title: "谷歌 Gemini 3.5 泄露：代号 Snow Bunny", hot: false },
    { id: 5, title: "Meta 步入“交付年”，超级智能实体眼镜曝光", hot: false },
    { id: 6, title: "三星 2025 年 Q4 营业利润腰斩，AI芯片供不应求", hot: false },
    { id: 7, title: "Google Chrome 迎来 Gemini “自动浏览”时代", hot: false },
];

export default function NewsSidebar() {
    return (
        <aside className="bg-[#111111]/50 border border-white/5 rounded-2xl p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-white flex items-center gap-2">
                    <Flame className="text-orange-500" size={20} />
                    AI 资讯
                </h3>
                <span className="text-xs text-gray-500 cursor-pointer hover:text-white transition-colors">更多 &gt;</span>
            </div>

            <div className="space-y-4">
                {newsItems.map((item, index) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="flex gap-3 items-start">
                            <span className={`text-sm font-mono font-bold w-4 ${index < 3 ? 'text-neon-green' : 'text-gray-600'}`}>
                                {index + 1}
                            </span>
                            <p className="text-sm text-gray-400 group-hover:text-white transition-colors line-clamp-2 leading-relaxed">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
                <div className="bg-gradient-to-r from-neon-purple/20 to-blue-600/20 rounded-xl p-4 border border-neon-purple/20 text-center">
                    <p className="text-xs text-gray-400 mb-2">加入社区</p>
                    <button className="w-full py-2 bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-lg text-sm font-bold transition-all">
                        立即加入
                    </button>
                </div>
            </div>
        </aside>
    );
}
