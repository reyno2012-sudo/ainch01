import { Github, Twitter, Linkedin, Code2, PenTool, LayoutTemplate, Search, Grid } from 'lucide-react';
import Link from 'next/link';

const categories = [
    { name: 'All', icon: Grid },
    { name: 'Chat', icon: MessageSquareText },
    { name: 'Dev', icon: Code2 },
    { name: 'Design', icon: PenTool },
    { name: 'Search', icon: Search },
];

import { MessageSquareText } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-full w-[300px] bg-[#1a1a2e]/80 backdrop-blur-md border-r border-white/5 p-8 hidden md:flex flex-col">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-10">
                <div className="w-24 h-24 rounded-full bg-slate-800 mb-4 ring-2 ring-[#00ff9f] ring-offset-4 ring-offset-[#0a0a0a] shadow-[0_0_15px_rgba(0,255,159,0.3)] flex items-center justify-center overflow-hidden">
                    {/* Placeholder for avatar image */}
                    <span className="text-3xl">👨‍💻</span>
                </div>
                <h2 className="text-xl font-bold text-[#e0e0e0] mb-1 font-mono">CyberDev</h2>
                <p className="text-sm text-[#6b7280] text-center">Exploring the boundaries of AI & Code</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 w-full space-y-2">
                <h3 className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-4 px-2">Discover</h3>
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#e0e0e0] hover:bg-white/5 hover:text-[#00ff9f] transition-all group text-left"
                    >
                        <cat.icon size={18} className="group-hover:drop-shadow-[0_0_5px_rgba(0,255,159,0.5)] transition-all" />
                        <span className="font-mono text-sm">{cat.name}</span>
                    </button>
                ))}
            </nav>

            {/* Social Links */}
            <div className="mt-auto pt-8 border-t border-white/5 w-full">
                <h3 className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-4 px-2">Connect</h3>
                <div className="flex gap-4 px-2">
                    <Link href="#" className="text-[#6b7280] hover:text-[#00ff9f] transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="#" className="text-[#6b7280] hover:text-[#00ff9f] transition-colors">
                        <Twitter size={20} />
                    </Link>
                    <Link href="#" className="text-[#6b7280] hover:text-[#00ff9f] transition-colors">
                        <Linkedin size={20} />
                    </Link>
                </div>
            </div>
        </aside>
    );
}
