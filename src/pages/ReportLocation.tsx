import React, { useState, useMemo } from 'react';
import { SAMPLE_POSTS } from '../data/sampleData';

interface ReportLocationProps {
    onBack: () => void;
    onNext: () => void;
}

export const ReportLocation: React.FC<ReportLocationProps> = ({ onBack, onNext }) => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCounty, setSelectedCounty] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    // Derived filters for dropdowns (using same logic as main app for consistency)
    const availableStates = useMemo(() => {
        return Array.from(new Set(SAMPLE_POSTS.map(p => p.location.state))).sort();
    }, []);

    const availableCounties = useMemo(() => {
        if (!selectedState) return [];
        return Array.from(new Set(
            SAMPLE_POSTS
                .filter(p => p.location.state === selectedState)
                .map(p => p.location.county)
        )).sort();
    }, [selectedState]);

    const availableCities = useMemo(() => {
        if (!selectedCounty) return [];
        return Array.from(new Set(
            SAMPLE_POSTS
                .filter(p => p.location.county === selectedCounty && p.location.state === selectedState)
                .map(p => p.location.city)
        )).sort();
    }, [selectedState, selectedCounty]);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#181010] dark:text-white min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 sticky top-0 z-10 transition-colors duration-200">
                <div
                    onClick={onBack}
                    className="flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </div>
                <h2 className="text-lg font-bold leading-tight flex-1 text-center pr-10">Report Lost Pet</h2>
            </header>

            {/* Progress Section */}
            <div className="px-6 py-4">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-semibold text-accent-orange uppercase tracking-wider">Step 2 of 3</p>
                        <p className="text-xs font-medium opacity-60">Location Details</p>
                    </div>
                    <div className="h-2 w-full bg-accent-orange/20 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-orange rounded-full transition-all duration-500" style={{ width: '66%' }}></div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 px-6 pb-24">
                <div className="pt-4 pb-6">
                    <h1 className="text-2xl font-bold leading-tight">Where was your pet last seen?</h1>
                    <p className="text-sm opacity-70 mt-2">Providing a precise location helps us notify neighbors in the correct area.</p>
                </div>

                <div className="space-y-5">
                    {/* State Dropdown */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold ml-1">State</label>
                        <div className="relative">
                            <select
                                className="w-full h-14 bg-white dark:bg-background-dark border border-[#e7dada] dark:border-white/10 rounded-full px-6 text-base focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all shadow-sm appearance-none bg-select-arrow bg-[length:1.5em_1.5em] bg-[position:right_1rem_center] bg-no-repeat pr-10"
                                value={selectedState}
                                onChange={(e) => {
                                    setSelectedState(e.target.value);
                                    setSelectedCounty('');
                                    setSelectedCity('');
                                }}
                            >
                                <option value="">Select State</option>
                                {availableStates.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* County Dropdown */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold ml-1">County</label>
                        <div className="relative">
                            <select
                                className="w-full h-14 bg-white dark:bg-background-dark border border-[#e7dada] dark:border-white/10 rounded-full px-6 text-base focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all shadow-sm appearance-none bg-select-arrow bg-[length:1.5em_1.5em] bg-[position:right_1rem_center] bg-no-repeat pr-10 disabled:opacity-50"
                                value={selectedCounty}
                                onChange={(e) => {
                                    setSelectedCounty(e.target.value);
                                    setSelectedCity('');
                                }}
                                disabled={!selectedState}
                            >
                                <option value="">Select County</option>
                                {availableCounties.map(county => (
                                    <option key={county} value={county}>{county}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* City Dropdown */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold ml-1">City</label>
                        <div className="relative">
                            <select
                                className="w-full h-14 bg-white dark:bg-background-dark border border-[#e7dada] dark:border-white/10 rounded-full px-6 text-base focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all shadow-sm appearance-none bg-select-arrow bg-[length:1.5em_1.5em] bg-[position:right_1rem_center] bg-no-repeat pr-10 disabled:opacity-50"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                disabled={!selectedCounty}
                            >
                                <option value="">Select City</option>
                                {availableCities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Street Address Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold ml-1">Street Name / Neighborhood</label>
                        <input
                            className="w-full h-14 bg-white dark:bg-background-dark border border-[#e7dada] dark:border-white/10 rounded-full px-6 text-base placeholder:text-gray-400 focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all shadow-sm focus:outline-none"
                            placeholder="e.g., Main Street or Central Park"
                            type="text"
                        />
                    </div>

                    {/* Decorative Visual Map Placeholder */}
                    <div className="mt-4 overflow-hidden rounded-xl border border-[#e7dada] dark:border-white/10 h-32 relative bg-gray-100 dark:bg-white/5">
                        <img
                            alt="Map view of the area"
                            className="w-full h-full object-cover opacity-60"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-tXwyp5XtKaB0aMGYUKkaxPYsRA8uhECgBeC8QHmhmDWXwyxhDmLf8EYmDRKpyTiECid-Eh-sZmhk2T1mVd8-bM2Z6FtI4LsMjAs44-1cdeI6pyOoZenRmnnPkOuoflhdW0ZB2b9A0JCtTcXnmYb1_3otOQtSgqEmfC-ZjIoZxV2szy0DAVX2tbkVieDmLfb1XsZ_Anr9mIrRTh_CI0aZQYNd6WxtX5LmiZiVmmMLfMAYJNUxPzU--xhAHb2ylD0OmegSWa5WjFip"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-accent-orange/20 p-3 rounded-full">
                                <span className="material-symbols-outlined text-accent-orange text-3xl">location_on</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark p-6 pb-8 border-t border-black/5 dark:border-white/5 flex gap-4 items-center max-w-[480px] mx-auto">
                <button
                    onClick={onBack}
                    className="flex-1 h-14 rounded-full bg-gray-200 dark:bg-white/10 text-[#181010] dark:text-white font-bold transition-all hover:bg-gray-300 dark:hover:bg-white/20 active:scale-95"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="flex-[2] h-14 rounded-full bg-accent-orange text-white font-bold shadow-lg shadow-accent-orange/30 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
                >
                    Next
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </footer>
        </div>
    );
};
