import Sidebar from '../sidebar/Sidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-[#00ff9f]/30">

            {/* Mobile Header */}
            <div className="md:hidden sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 ring-1 ring-[#00ff9f] flex items-center justify-center">
                        <span className="text-sm">👨‍💻</span>
                    </div>
                    <span className="font-bold font-mono">CyberNav</span>
                </div>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#e0e0e0]">
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="md:pl-[300px] min-h-screen relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    {children}
                </div>
            </main>

            {/* Mobile Menu Overlay (Simplified for now) */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#0a0a0a] p-4 pt-20 md:hidden">
                    <p className="text-center text-muted-foreground">Mobile Menu Content Here</p>
                </div>
            )}
        </div>
    );
}
