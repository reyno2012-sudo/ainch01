import { Trophy, Rocket, TrendingUp, Users } from 'lucide-react';
import clsx from 'clsx';

export default function AchievementWall() {
    return (
        <section className="w-full">
            <h2 className="text-neon-purple font-mono text-xl mb-6 flex items-center gap-2">
                <span className="opacity-50">//</span> My Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AchievementCard
                    title="Prompt Creation"
                    icon={Trophy}
                    items={[
                        "Top Award at Global AI Hackathon",
                        "Creating 100+ High-Quality Prompts",
                        "1M+ Total Prompt Executions"
                    ]}
                />
                <AchievementCard
                    title="Product Development"
                    icon={Rocket}
                    items={[
                        "Indie Developer of 3 SaaS Apps",
                        "Active Community of 5000+ Users",
                        "Launched on Product Hunt Top #3"
                    ]}
                />
            </div>
        </section>
    );
}

function AchievementCard({ title, icon: Icon, items }: { title: string, icon: any, items: string[] }) {
    return (
        <div className={clsx(
            "p-6 rounded-2xl bg-[#111111]/80 border border-white/5",
            "hover:border-neon-purple/30 transition-colors duration-300",
            "group"
        )}>
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-100">{title}</h3>
            </div>

            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green/50" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
