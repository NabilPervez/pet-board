import React from 'react';
import { PawPrint } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.reload()}>
                    <div className="bg-soft-teal p-1.5 rounded-lg text-white">
                        <PawPrint className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-dark-slate tracking-tight">PawsHome</span>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <button className="text-dark-slate font-bold hover:text-soft-teal transition-colors px-3 py-2">Find a Pet</button>
                    <button className="text-dark-slate font-bold hover:text-soft-teal transition-colors px-3 py-2">Community</button>
                    <button className="text-dark-slate font-bold hover:text-soft-teal transition-colors px-3 py-2">Login</button>
                    <button className="btn btn-secondary shadow-lg shadow-red-100">Post a Lost Pet</button>
                </div>
            </div>
        </header>
    );
};
