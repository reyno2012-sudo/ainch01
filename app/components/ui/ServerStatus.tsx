'use client';

import { useState, useEffect } from 'react';
import { Activity, Clock } from 'lucide-react';
import clsx from 'clsx';

export default function ServerStatus() {
    const [message, setMessage] = useState<string>('Connecting...');
    const [time, setTime] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch fetch hello message
        fetch('/api/hello')
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(() => setMessage('Backend Offline'));

        // Fetch time
        fetch('/api/time')
            .then(res => res.json())
            .then(data => setTime(data.time))
            .catch(() => setTime(null))
            .finally(() => setLoading(false));

        // Refresh time every 5 seconds
        const interval = setInterval(() => {
            fetch('/api/time')
                .then(res => res.json())
                .then(data => setTime(data.time))
                .catch(() => setTime(null));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
            {/* API Message Status */}
            <div className="flex-1 bg-[#111111]/50 border border-neon-blue/20 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <Activity size={24} />
                </div>
                <div>
                    <h3 className="text-gray-400 text-sm font-mono mb-1">API Status</h3>
                    <p className={clsx("text-lg font-bold", loading ? "animate-pulse" : "text-white")}>
                        {message}
                    </p>
                </div>
            </div>

            {/* Server Time Status */}
            <div className="flex-1 bg-[#111111]/50 border border-neon-purple/20 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                    <Clock size={24} />
                </div>
                <div>
                    <h3 className="text-gray-400 text-sm font-mono mb-1">Server Timestamp</h3>
                    <p className={clsx("text-lg font-bold font-mono", loading ? "animate-pulse" : "text-white")}>
                        {time ? new Date(time * 1000).toLocaleTimeString() : 'Syncing...'}
                    </p>
                </div>
            </div>
        </div>
    );
}
