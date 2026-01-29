'use client';

import { useState, useMemo } from 'react';
import NavBar from './components/layout/NavBar';
import HeroSection from './components/hero/HeroSection';
import ServerStatus from './components/ui/ServerStatus';
import FeaturedCards from './components/featured/FeaturedCards';
import NewsSidebar from './components/sidebar/NewsSidebar';
import CategoryFilter from './components/tools/CategoryFilter';
import ToolGrid from './components/tools/ToolGrid';
import toolsData from '@/data/tools.json';
import { Tool } from '@/types';

export default function Dashboard() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredTools = useMemo(() => {
        let tools = toolsData as Tool[];

        if (selectedCategory !== 'All') {
            tools = tools.filter(tool => tool.category === selectedCategory);
        }

        return tools;
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-neon-blue/30">
            {/* 1. Navigation Bar */}
            <NavBar />

            {/* Main Content Area */}
            <main className="pt-20 pb-12 px-4 md:px-8 max-w-[1400px] mx-auto">

                {/* 2. Search & Hero Section */}
                <HeroSection />

                {/* 2.1 Backend Status */}
                <ServerStatus />

                {/* 3. Featured Recommendations */}
                <FeaturedCards />

                {/* 4. Two-Column Layout: Tools + Sidebar */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column: Tools (Primary Content) */}
                    <div className="flex-1 min-w-0"> {/* min-w-0 prevents flex overflow */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">AI 工具大全</h2>
                            <span className="text-sm text-gray-500 cursor-pointer hover:text-white transition-colors">查看更多 &gt;</span>
                        </div>

                        <CategoryFilter
                            currentCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />

                        <ToolGrid tools={filteredTools} />
                    </div>

                    {/* Right Column: Sidebar (News/Ads) */}
                    <div className="w-full lg:w-80 shrink-0">
                        <NewsSidebar />
                    </div>
                </div>
            </main>
        </div>
    );
}
