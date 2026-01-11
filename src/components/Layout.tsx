import React from 'react';
import { BottomNav } from './BottomNav';

interface LayoutProps {
    children: React.ReactNode;
    currentView: string;
    onChangeView: (view: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onChangeView }) => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex text-dark-slate dark:text-white">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-screen sticky top-0 p-6">
                <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer" onClick={() => onChangeView('home')}>
                    <div className="bg-primary/20 rounded-full size-10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">pets</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">PawsHome</span>
                </div>

                <nav className="flex flex-col gap-2 flex-1">
                    <button
                        onClick={() => onChangeView('home')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold ${currentView === 'home' ? 'bg-primary/10 text-primary' : 'text-zinc-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: currentView === 'home' ? "'FILL' 1" : "'FILL' 0" }}>home</span>
                        Home
                    </button>
                    <button
                        onClick={() => onChangeView('search')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold ${currentView === 'search' ? 'bg-primary/10 text-primary' : 'text-zinc-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                        <span className="material-symbols-outlined">search</span>
                        Explore
                    </button>
                    <button
                        onClick={() => onChangeView('report')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold ${currentView.startsWith('report') ? 'bg-primary/10 text-primary' : 'text-zinc-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                        <span className="material-symbols-outlined">add_circle</span>
                        Report Lost Pet
                    </button>
                    <button
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-zinc-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <span className="material-symbols-outlined">chat_bubble</span>
                        Messages
                    </button>
                    <button
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-zinc-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <span className="material-symbols-outlined">notifications</span>
                        Alerts
                    </button>
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-all font-semibold text-zinc-500 hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
                        <div className="size-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">person</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-dark-slate dark:text-white">Profile</p>
                            <p className="text-xs">View Account</p>
                        </div>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 relative w-full h-screen overflow-y-auto">
                {/* We need to constrain the container on desktop for the app-like feel, or make it responsive grids */}
                <div className="w-full h-full mx-auto md:p-6 lg:p-10">
                    {children}
                </div>
            </main>

            {/* Mobile Bottom Nav - Hide on Report screens to prevent overlap with fixed footer */}
            {!currentView.startsWith('report') && (
                <div className="md:hidden">
                    <BottomNav currentView={currentView} onChangeView={onChangeView} variant={currentView === 'search' ? 'map' : 'home'} />
                </div>
            )}
        </div>
    );
};
