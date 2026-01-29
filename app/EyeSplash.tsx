'use client';

export default function EyeSplash({ onClose }: { onClose: () => void }) {
    const handleEnter = () => {
        // Play sound effect
        const audio = new Audio('/sounds/enter.mp3');
        audio.volume = 0.5; // Set volume to 50%
        audio.play().catch(e => console.error("Audio play failed:", e));

        onClose();
    };

    return (
        <div
            onClick={handleEnter}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] cursor-pointer"
        >
            <div className="relative group animate-pulse-slow">
                <div className="absolute inset-0 bg-neon-green/20 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-neon-green/30 shadow-[0_0_80px_rgba(0,255,159,0.2)] overflow-hidden transition-transform duration-700 group-hover:scale-105">
                    <img
                        src="/avatar_v2.jpg"
                        alt="Enter CyberNav"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
