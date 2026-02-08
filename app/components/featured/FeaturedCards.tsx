'use client';

import { ArrowRight, Zap, BookOpen, Code, Bot } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Vibe Coding",
        subtitle: "零基础入门教程",
        icon: Code,
        color: "from-blue-500/20 to-purple-500/20",
        border: "border-blue-500/30",
        text: "text-blue-400"
    },
    {
        title: "MCP服务器",
        subtitle: "IDE扩展插件工具",
        icon: Zap,
        color: "from-orange-500/20 to-red-500/20",
        border: "border-orange-500/30",
        text: "text-orange-400"
    },
    {
        title: "Prompt库",
        subtitle: "精选优质提示词",
        icon: BookOpen,
        color: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/30",
        text: "text-green-400"
    },
    {
        title: "Agent Skills",
        subtitle: "玩转智能体喂饭指南",
        icon: Bot,
        color: "from-pink-500/20 to-rose-500/20",
        border: "border-pink-500/30",
        text: "text-pink-400"
    }
];

export default function FeaturedCards() {
    return (
        <section className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-neon-purple rounded-full"></span>
                精选推荐
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className={clsx(
                            "relative overflow-hidden rounded-xl border p-6 cursor-pointer group",
                            "bg-gradient-to-br backdrop-blur-sm",
                            item.color,
                            item.border
                        )}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        </div>

                        <div className={clsx("w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-black/20", item.text)}>
                            <item.icon size={24} />
                        </div>

                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.subtitle}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
