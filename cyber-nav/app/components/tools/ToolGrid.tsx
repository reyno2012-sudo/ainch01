import { Tool } from '@/types';
import ToolCard from './ToolCard';

interface ToolGridProps {
    tools: Tool[];
}

export default function ToolGrid({ tools }: ToolGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
            ))}
        </div>
    );
}
