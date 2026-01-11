import React from 'react';
import { SAMPLE_POSTS } from '../data/sampleData';
import { PetListCard } from '../components/PetCard';

interface SearchProps {
    onNavigate: (view: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onNavigate }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-dark-slate dark:text-white transition-colors duration-200">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center p-4 pb-2 justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={() => onNavigate('home')}
                            className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="material-symbols-outlined text-dark-slate dark:text-white">arrow_back_ios</span>
                        </button>
                    </div>
                    <h2 className="text-dark-slate dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Search Results</h2>
                    <div className="flex items-center justify-end">
                        <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-symbols-outlined text-dark-slate dark:text-white">search</span>
                        </button>
                    </div>
                </div>

                {/* Geographic Breadcrumb Chips */}
                <div className="flex gap-3 p-3 overflow-x-auto no-scrollbar scroll-smooth">
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary/10 dark:bg-primary/20 pl-3 pr-2 border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                        <p className="text-dark-slate dark:text-white text-sm font-semibold leading-normal">Texas</p>
                        <span className="material-symbols-outlined text-primary text-[18px]">chevron_right</span>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary/10 dark:bg-primary/20 pl-3 pr-2 border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                        <p className="text-dark-slate dark:text-white text-sm font-semibold leading-normal">Denton</p>
                        <span className="material-symbols-outlined text-primary text-[18px]">chevron_right</span>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary pl-3 pr-3 shadow-md shadow-primary/20">
                        <span className="material-symbols-outlined text-white text-[18px]">location_on</span>
                        <p className="text-white text-sm font-semibold leading-normal">The Colony</p>
                        <span className="material-symbols-outlined text-white text-[18px]">expand_more</span>
                    </button>
                </div>
            </div>

            {/* Results Feed */}
            <main className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto pb-24 px-4 pt-4 md:pb-10">
                {SAMPLE_POSTS.map((post) => (
                    <PetListCard key={post.id} post={post} distance="0.8mi" />
                ))}
            </main>

            {/* Floating Filter Button */}
            <div className="fixed bottom-24 right-6 flex flex-col gap-4 z-40 md:bottom-10 md:right-10">
                <button className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/40 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">tune</span>
                </button>
            </div>
        </div>
    );
};
