'use client';

import { Flame } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { aiDailyNews, NewsItem } from '@/data/ai-daily-news';

function mergeNews(dbNews: NewsItem[] = []) {
    const seen = new Set<string>();

    return [...aiDailyNews, ...dbNews]
        .filter((item) => {
            const key = item.url || item.title;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        })
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 7);
}

export default function NewsSidebar() {
    const [news, setNews] = useState<NewsItem[]>(aiDailyNews.slice(0, 7));

    useEffect(() => {
        async function fetchNews() {
            try {
                const supabase = createClient();
                const { data, error } = await supabase
                    .from('ai_news')
                    .select('*')
                    .order('date', { ascending: false })
                    .limit(7);

                if (error) {
                    console.warn("Supabase news fetch failed, using local news", error);
                }

                setNews(mergeNews((data || []) as NewsItem[]));
            } catch (e) {
                console.error("Fetch error, using fallback", e);
                setNews(mergeNews());
            }
        }

        fetchNews();
    }, []);

    const sidebarNews = news.length > 0 ? news : aiDailyNews.slice(0, 7);

    return (
        <aside className="bg-[#111111]/50 border border-white/5 rounded-2xl p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-6">
                <Link href="/ai-daily" className="font-bold text-white flex items-center gap-2 hover:text-neon-blue transition-colors">
                    <Flame className="text-orange-500" size={20} />
                    AI 日报
                </Link>
                <Link href="/ai-daily" className="text-xs text-gray-500 cursor-pointer hover:text-white transition-colors">
                    更多 &gt;
                </Link>
            </div>

            <div className="space-y-4">
                {sidebarNews.map((item, index) => (
                    <Link key={item.id} href="/ai-daily" className="group cursor-pointer block">
                        <div className="flex gap-3 items-start">
                            <span className={`text-sm font-mono font-bold w-4 ${index < 3 ? 'text-neon-green' : 'text-gray-600'}`}>
                                {index + 1}
                            </span>
                            <p className="text-sm text-gray-400 group-hover:text-white transition-colors line-clamp-2 leading-relaxed">
                                {item.title}
                            </p>
                        </div>
                    </Link>
                ))}
                {sidebarNews.length === 0 && (
                    <div className="text-center text-gray-500 py-4 text-sm">
                        暂无资讯或加载中...
                    </div>
                )}
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
