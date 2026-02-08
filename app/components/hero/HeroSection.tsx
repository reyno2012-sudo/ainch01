'use client';

import { Search } from 'lucide-react';
import clsx from 'clsx';

export default function HeroSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-16 md:py-24 text-center px-4">
            {/* Title / Slogan */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                四爷 <span className="text-neon-blue">AI</span> 栈，从这里开始
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
                分享最新最有趣的 AI 工具、资源、信息，打造最强AI全栈
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-3xl relative mb-6">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="text-gray-500" size={24} />
                </div>
                <input
                    type="text"
                    placeholder="全站搜索 AI 相关工具、资源、信息"
                    className={clsx(
                        "w-full py-4 pl-14 pr-24 rounded-full bg-white text-gray-900 placeholder:text-gray-400",
                        "focus:outline-none focus:ring-4 focus:ring-neon-blue/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
                        "text-lg transition-all"
                    )}
                />
                <button className="absolute right-2 top-2 bottom-2 bg-neon-blue hover:bg-blue-600 text-white px-8 rounded-full font-bold transition-colors">
                    搜索
                </button>
            </div>

            {/* Hot Tags */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                <span>热门搜索:</span>
                {["Vibe Coding", "AIGC", "Prompt", "编程工具", "Gemini"].map((tag, i) => (
                    <span
                        key={i}
                        className="text-neon-blue hover:text-white cursor-pointer hover:underline transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
