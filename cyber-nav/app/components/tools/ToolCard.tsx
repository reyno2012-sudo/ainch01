import { ExternalLink, Box } from 'lucide-react';
import { Tool } from '@/types';
import Link from 'next/link';
import clsx from 'clsx';

interface ToolCardProps {
    tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
    // Generate a consistent icon placeholder or use one if mapped
    return (
        <Link
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
        >
            <div className={clsx(
                "h-full p-5 flex flex-col items-center text-center transition-all duration-300",
                "bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-2xl",
                "group-hover:border-neon-green/50 group-hover:shadow-[0_0_20px_rgba(0,255,159,0.15)] group-hover:-translate-y-1 group-hover:bg-[#1a1a1a]",
                "relative overflow-hidden"
            )}>
                {/* Glow Element */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-neon-green/10 rounded-full blur-2xl group-hover:bg-neon-green/20 transition-colors" />

                {/* Icon (Placeholder) */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-gray-300 group-hover:text-neon-green group-hover:border-neon-green/30 transition-all">
                    {/* Note: Ideally we map tool icons. Using basic Box as fallback */}
                    <Box size={24} />
                </div>

                <h3 className="text-lg font-bold text-gray-100 group-hover:text-neon-green transition-colors font-mono mb-1">
                    {tool.name}
                </h3>

                <span className="text-xs text-neon-purple/70 font-mono mb-2 block">
                    {tool.category}
                </span>

                <p className="text-xs text-gray-500 line-clamp-2">
                    {tool.description}
                </p>
            </div>
        </Link>
    );
}
