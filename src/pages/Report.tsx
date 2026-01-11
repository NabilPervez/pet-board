import React from 'react';

interface ReportProps {
    onBack: () => void;
}

export const Report: React.FC<ReportProps> = ({ onBack }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <div className="max-w-[480px] mx-auto min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
                {/* TopAppBar */}
                <div className="sticky top-0 z-10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80 px-4 py-4 flex items-center justify-between">
                    <div
                        onClick={onBack}
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-[#121717] dark:text-white">arrow_back_ios_new</span>
                    </div>
                    <h2 className="text-[#121717] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Report Lost Pet</h2>
                </div>

                {/* ProgressBar */}
                <div className="px-6 py-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <p className="text-[#121717] dark:text-white text-sm font-semibold">Step 1: Basic Info</p>
                            <p className="text-[#678381] dark:text-gray-400 text-xs font-medium">1 of 3</p>
                        </div>
                        <div className="h-2 w-full bg-[#dde4e4] dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '33.33%' }}></div>
                        </div>
                    </div>
                </div>

                <main className="flex-1 px-6 pb-32">
                    {/* HeadlineText */}
                    <div className="pt-4 pb-6">
                        <h1 className="text-[#121717] dark:text-white text-2xl font-extrabold tracking-tight">Tell us about your pet</h1>
                        <p className="text-[#678381] dark:text-gray-400 mt-1 text-sm">Every detail helps us bring them home.</p>
                    </div>

                    {/* TextField */}
                    <div className="mb-8">
                        <label className="block mb-2">
                            <span className="text-[#121717] dark:text-white text-base font-semibold">What is your pet's name?</span>
                        </label>
                        <input
                            className="w-full h-14 px-4 rounded-xl border border-[#dde4e4] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#121717] dark:text-white focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-[#678381]/60 transition-all outline-none"
                            placeholder="e.g. Buddy"
                            type="text"
                        />
                    </div>

                    {/* TitleText & Pet Type Cards */}
                    <div className="mb-8">
                        <h2 className="text-[#121717] dark:text-white text-base font-semibold mb-4">Pet Type</h2>
                        <div className="grid grid-cols-4 gap-3">
                            {/* Dog */}
                            <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-primary bg-primary/5 dark:bg-primary/10">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">pets</span>
                                </div>
                                <span className="text-xs font-bold text-[#121717] dark:text-white">Dog</span>
                            </button>
                            {/* Cat */}
                            <button className="flex flex-col items-center gap-2 p-3 rounded-xl border border-[#dde4e4] dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                                    <span className="material-symbols-outlined text-3xl">pets</span>
                                </div>
                                <span className="text-xs font-medium text-[#678381] dark:text-gray-300">Cat</span>
                            </button>
                            {/* Bird */}
                            <button className="flex flex-col items-center gap-2 p-3 rounded-xl border border-[#dde4e4] dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                                    <span className="material-symbols-outlined text-3xl">flutter_dash</span>
                                </div>
                                <span className="text-xs font-medium text-[#678381] dark:text-gray-300">Bird</span>
                            </button>
                            {/* Other */}
                            <button className="flex flex-col items-center gap-2 p-3 rounded-xl border border-[#dde4e4] dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                                    <span className="material-symbols-outlined text-3xl">more_horiz</span>
                                </div>
                                <span className="text-xs font-medium text-[#678381] dark:text-gray-300">Other</span>
                            </button>
                        </div>
                    </div>

                    {/* Upload Photos Area */}
                    <div className="mb-8">
                        <h2 className="text-[#121717] dark:text-white text-base font-semibold mb-4">Upload Photos</h2>
                        <div className="w-full aspect-video border-2 border-dashed border-[#dde4e4] dark:border-gray-700 rounded-xl flex flex-col items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-all group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">photo_camera</span>
                            </div>
                            <p className="mt-4 text-[#121717] dark:text-white font-semibold">Add clear photos</p>
                            <p className="text-[#678381] dark:text-gray-400 text-xs mt-1">PNG, JPG up to 10MB</p>
                        </div>
                        <p className="mt-3 text-xs text-[#678381] dark:text-gray-400 leading-relaxed italic">
                            Recent, high-quality photos help neighbors identify your pet much faster.
                        </p>
                    </div>
                </main>

                {/* Bottom Navigation / CTA */}
                <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto p-6 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
                    <button className="w-full bg-accent-orange hover:bg-orange-600 active:scale-[0.98] text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2">
                        Next Step
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
