import React from 'react';



interface BottomNavProps {
    currentView: string;
    onChangeView: (view: string) => void;
    variant?: 'home' | 'map'; // 'home' has Home/Explore, 'map' has Home/Map/Report...
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChangeView, variant = 'home' }) => {
    if (variant === 'map') {
        return (
            <nav className="fixed bottom-0 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 py-2 flex justify-between items-center z-50">
                <button className="flex flex-col items-center gap-1" onClick={() => onChangeView('home')}>
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                    <span className="text-[10px] font-medium text-primary">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1" onClick={() => onChangeView('search')}>
                    <span className="material-symbols-outlined text-muted-teal">map</span>
                    <span className="text-[10px] font-medium text-muted-teal">Map</span>
                </button>
                <button className="flex flex-col items-center gap-1" onClick={() => onChangeView('report')}>
                    <div className="size-6 bg-muted-teal/10 dark:bg-muted-teal/20 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-muted-teal text-[18px]">add</span>
                    </div>
                    <span className="text-[10px] font-medium text-muted-teal">Report</span>
                </button>
                <button className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-muted-teal">notifications</span>
                    <span className="text-[10px] font-medium text-muted-teal">Alerts</span>
                </button>
                <button className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-muted-teal">person</span>
                    <span className="text-[10px] font-medium text-muted-teal">Profile</span>
                </button>
            </nav>
        );
    }

    return (
        <nav className="fixed bottom-0 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-zinc-100 dark:border-zinc-800 pb-8 pt-2 px-6 flex justify-between items-center z-50">
            <button
                className={`flex flex-col items-center gap-1 ${currentView === 'home' ? 'text-primary' : 'text-zinc-400'}`}
                onClick={() => onChangeView('home')}
            >
                <span className={`material-symbols-outlined text-[28px] ${currentView === 'home' ? 'fill-current' : ''}`}>home</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
            </button>
            <button
                className={`flex flex-col items-center gap-1 ${currentView === 'search' ? 'text-primary' : 'text-zinc-400'}`}
                onClick={() => onChangeView('search')}
            >
                <span className="material-symbols-outlined text-[28px]">search</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Explore</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-zinc-400">
                <span className="material-symbols-outlined text-[28px]">chat_bubble</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Messages</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-zinc-400">
                <span className="material-symbols-outlined text-[28px]">person</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
            </button>
        </nav>
    );
};
