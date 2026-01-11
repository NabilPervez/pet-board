import React from 'react';
import { PetPost } from '../types';

interface PetGridCardProps {
    post: PetPost;
    distance: string;
}

export const PetGridCard: React.FC<PetGridCardProps> = ({ post, distance }) => {
    const isLoss = post.status === 'Lost';
    const statusColor = isLoss ? 'bg-accent-orange' : 'bg-primary';
    const statusText = isLoss ? 'LOST' : 'FOUND';

    // Use a fallback image if provided URL fails or for demo consistency
    const imageUrl = post.id % 2 === 0
        ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600' // Dog
        : 'https://images.unsplash.com/photo-1529778873920-4da4926a7071?auto=format&fit=crop&q=80&w=600'; // Cat

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden ios-shadow border border-zinc-50 dark:border-zinc-800">
            <div className="relative aspect-square bg-zinc-200">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                ></div>
                <div className="absolute top-2 left-2">
                    <span className={`${statusColor} ${isLoss ? 'text-white' : 'text-[#121717]'} text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider`}>
                        {statusText}
                    </span>
                </div>
                <button className="absolute top-2 right-2 size-7 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm font-bold text-dark-slate">favorite</span>
                </button>
            </div>
            <div className="p-3">
                <h4 className="font-bold text-[#121717] dark:text-white text-sm">{post.pet_name}</h4>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    <span className="text-[11px] ml-0.5 truncate">{post.location.city} • {distance}</span>
                </div>
                <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                    {isLoss ? (
                        <>
                            <span className="text-[10px] font-bold text-accent-orange">REWARD</span>
                            <span className="text-xs font-bold text-[#121717] dark:text-white">{post.reward}</span>
                        </>
                    ) : (
                        <>
                            <span className="text-[10px] font-bold text-primary">STATUS</span>
                            <span className="text-[11px] font-bold text-[#121717] dark:text-white">Safe</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export const PetListCard: React.FC<PetGridCardProps> = ({ post, distance }) => {
    const isLoss = post.status === 'Lost';
    const statusColor = isLoss ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
    const isMissing = post.status === 'Lost';

    // Use a fallback image
    const imageUrl = post.id % 2 === 0
        ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600'
        : 'https://images.unsplash.com/photo-1529778873920-4da4926a7071?auto=format&fit=crop&q=80&w=600';

    return (
        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] bg-white dark:bg-[#1c2a29] overflow-hidden border border-gray-100 dark:border-gray-800 mb-4">
            <div
                className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover"
                style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-4">
                <div className="flex justify-between items-start">
                    <p className="text-dark-slate dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">{post.pet_name}</p>
                    <span className={`${statusColor} text-[10px] uppercase font-bold px-2 py-0.5 rounded-full`}>
                        {isMissing ? 'Missing' : 'Found'}
                    </span>
                </div>
                <div className="flex items-end gap-3 justify-between mt-1">
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-muted-teal text-sm">near_me</span>
                            <p className="text-muted-teal dark:text-gray-400 text-sm font-medium">{post.location.street}</p>
                        </div>
                        <p className="text-muted-teal/70 dark:text-gray-500 text-xs font-normal">Last seen 2 hours ago</p>
                    </div>
                    <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 active:scale-95 transition-transform">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};
