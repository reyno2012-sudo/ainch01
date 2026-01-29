import clsx from 'clsx';
import { Category } from '@/types';

interface CategoryFilterProps {
    currentCategory: string;
    onSelectCategory: (category: string) => void;
}

const categories = ['All', 'Creative', 'Dev', 'Learning', 'Chat', 'Search'];

export default function CategoryFilter({ currentCategory, onSelectCategory }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={clsx(
                        "px-6 py-2 rounded-full text-sm font-mono transition-all duration-300",
                        "border",
                        currentCategory === cat
                            ? "bg-neon-green text-black border-neon-green font-bold shadow-[0_0_15px_rgba(0,255,159,0.4)]"
                            : "bg-transparent text-gray-400 border-white/10 hover:border-neon-green hover:text-neon-green"
                    )}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
