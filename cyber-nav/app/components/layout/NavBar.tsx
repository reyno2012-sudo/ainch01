'use client';

import { Bell, User, Menu } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6 md:px-12">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                    <img src="/logo_avatar.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                    AInch
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <Link href="/" className="text-white hover:text-neon-blue transition-colors">主页</Link>
                <Link href="#" className="hover:text-neon-blue transition-colors">社区</Link>
                <Link href="#" className="hover:text-neon-blue transition-colors">AI工具</Link>
                <Link href="#" className="hover:text-neon-blue transition-colors">AI知识库</Link>
                <Link href="#" className="hover:text-neon-blue transition-colors">关于我</Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-3 pl-2 border-l border-white/10 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-green to-neon-blue p-[1px]">
                        <img
                            src="/avatar_v2.jpg"
                            alt="User"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>
                <button className="md:hidden p-2 text-gray-400">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
}
