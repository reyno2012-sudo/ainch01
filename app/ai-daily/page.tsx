'use client';

import NavBar from '@/app/components/layout/NavBar';
import NewsSidebar from '@/app/components/sidebar/NewsSidebar';
import { aiDailyNews } from '@/data/ai-daily-news';
import { ArrowLeft, Calendar, Tag, Flame } from 'lucide-react';
import Link from 'next/link';

export default function AIDailyPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-neon-blue/30">
            {/* Navigation Bar */}
            <NavBar />

            <main className="pt-24 pb-12 px-4 md:px-8 max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: News List */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 mb-8">
                            <Link href="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
                                <ArrowLeft className="text-gray-400 group-hover:text-white" />
                            </Link>
                            <div>
                                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <Flame className="text-orange-500 w-8 h-8" />
                                    AI 日报
                                </h1>
                                <p className="text-gray-400 mt-1">每日精选 AI 行业动态与前沿资讯</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {aiDailyNews.map((item) => (
                                <article
                                    key={item.id}
                                    className="bg-[#111111]/50 border border-white/5 rounded-2xl p-6 hover:border-neon-blue/30 transition-all hover:bg-[#111111]/80 group"
                                >
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div className="flex items-center gap-3">
                                            {item.hot && (
                                                <span className="px-2 py-0.5 bg-orange-500/10 text-orange-400 text-xs font-bold rounded border border-orange-500/20">
                                                    HOT
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                                                <Calendar size={12} />
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                                        {item.title}
                                    </h2>

                                    {item.description && (
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>
                                    )}

                                    {item.tags && item.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {item.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-400 border border-white/5 hover:border-white/10 transition-colors"
                                                >
                                                    <Tag size={10} />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="w-full lg:w-80 shrink-0 hidden lg:block">
                        <NewsSidebar />
                    </div>
                </div>
            </main>
        </div>
    );
}
