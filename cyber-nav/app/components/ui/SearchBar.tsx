import { Search } from 'lucide-react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="relative max-w-2xl w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#6b7280]" />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-[#1a1a2e]/50 border border-white/10 rounded-xl text-[#e0e0e0] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#00ff9f]/50 focus:border-transparent transition-all backdrop-blur-sm"
                placeholder="Search tools, categories, tags..."
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <span className="text-xs text-[#6b7280] font-mono border border-white/10 rounded px-1.5 py-0.5">
                    ⌘K
                </span>
            </div>
        </div>
    );
}
