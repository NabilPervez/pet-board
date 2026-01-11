import React, { useState } from 'react';
import { SAMPLE_POSTS } from '../data/sampleData';
import { PetGridCard } from '../components/PetCard';

interface HomeProps {
    onNavigate: (view: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="text-dark-slate dark:text-white pb-20 md:pb-0">
            <div className="max-w-[480px] md:max-w-2xl lg:max-w-4xl mx-auto flex flex-col relative bg-white dark:bg-background-dark shadow-xl md:shadow-none md:bg-transparent rounded-2xl overflow-hidden">

                {/* Top Navigation - Mobile Only */}
                <nav className="flex md:hidden items-center px-4 py-3 justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
                    <div className="flex size-10 shrink-0 items-center">
                        <div className="bg-primary/20 rounded-full size-10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">pets</span>
                        </div>
                    </div>
                    <h2 className="text-[#121717] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">PawsHome</h2>
                    <div className="flex w-10 items-center justify-end">
                        <button className="flex items-center justify-center rounded-full size-10 bg-background-light dark:bg-zinc-800 text-[#121717] dark:text-white">
                            <span className="material-symbols-outlined text-[24px]">notifications</span>
                        </button>
                    </div>
                </nav>

                {/* Desktop Header equivalent */}
                <div className="hidden md:flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-dark-slate dark:text-white">Dashboard</h1>
                        <p className="text-muted-teal">Welcome back, neighbor.</p>
                    </div>
                    <button className="btn bg-primary text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                        + New Post
                    </button>
                </div>

                {/* Welcome Header - Mobile */}
                <header className="px-4 pt-6 pb-2 md:hidden">
                    <h1 className="text-[#121717] dark:text-white text-[28px] font-bold leading-tight">Let's bring them home.</h1>
                    <p className="text-[#678381] dark:text-zinc-400 text-base font-normal mt-1">We're here to help you reunite with your best friend.</p>
                </header>

                {/* Action Buttons */}
                <div className="px-4 py-4 md:px-0">
                    <div className="flex gap-4">
                        <button
                            onClick={() => onNavigate('report')}
                            className="flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-accent-orange text-white ios-shadow transition-transform active:scale-95 group hover:shadow-orange-500/20"
                        >
                            <span className="material-symbols-outlined text-[32px] font-light group-hover:scale-110 transition-transform">emergency_home</span>
                            <span className="font-bold text-sm">I Lost a Pet</span>
                        </button>
                        <button
                            onClick={() => onNavigate('report-found')}
                            className="flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary text-[#121717] ios-shadow transition-transform active:scale-95 group hover:shadow-teal-500/20"
                        >
                            <span className="material-symbols-outlined text-[32px] font-light group-hover:scale-110 transition-transform">volunteer_activism</span>
                            <span className="font-bold text-sm">I Found a Pet</span>
                        </button>
                    </div>
                </div>

                {/* Search & Hierarchical Filter */}
                <div className="px-4 py-2 md:px-0">
                    <div className="flex gap-2">
                        <label className="flex flex-col flex-1 h-12">
                            <div className="flex w-full flex-1 items-stretch rounded-xl bg-background-light dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 focus-within:ring-2 ring-primary/50 transition-all">
                                <div className="text-[#678381] flex items-center justify-center pl-4">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input
                                    className="w-full bg-transparent border-none focus:ring-0 text-[#121717] dark:text-white placeholder:text-[#678381] px-3 text-sm focus:outline-none"
                                    placeholder="Search breed, color, location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </label>
                        <button
                            onClick={() => onNavigate('search')}
                            className="flex items-center justify-center rounded-xl bg-background-light dark:bg-zinc-800 size-12 border border-zinc-100 dark:border-zinc-700 text-[#121717] dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                        >
                            <span className="material-symbols-outlined">page_info</span>
                        </button>
                    </div>

                    {/* Breadcrumb Tags */}
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2 no-scrollbar">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-primary/20 shrink-0 cursor-pointer hover:bg-primary/20 transition-colors">
                            California <span className="material-symbols-outlined text-[14px]">expand_more</span>
                        </span>
                        <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shrink-0 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                            Los Angeles <span className="material-symbols-outlined text-[14px]">expand_more</span>
                        </span>
                        <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shrink-0 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                            All Cities <span className="material-symbols-outlined text-[14px]">expand_more</span>
                        </span>
                    </div>
                </div>

                {/* Recent Reports Section */}
                <section className="flex-1 px-4 py-4 md:px-0 bg-background-light/50 dark:bg-background-dark/50 md:bg-transparent">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#121717] dark:text-white font-bold text-lg">Recent Reports Near You</h3>
                        <button onClick={() => onNavigate('search')} className="text-primary text-sm font-bold hover:underline">View All</button>
                    </div>

                    {/* Pet Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {SAMPLE_POSTS.slice(0, 4).map((post) => (
                            <PetGridCard key={post.id} post={post} distance="1.2mi" />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
