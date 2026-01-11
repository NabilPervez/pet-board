import React from 'react';
import { MapPin, DollarSign, Calendar } from 'lucide-react';
import { PetPost } from '../types';

interface PostCardProps {
    post: PetPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const isLost = post.status === 'Lost';

    return (
        <div className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group border-none">
            <div className="relative h-56 -mx-4 -mt-4 mb-4 bg-gray-100 overflow-hidden">
                <img
                    src={`https://placehold.co/600x400/png?text=${post.pet_name !== 'Unknown' ? post.pet_name : post.pet_type}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md ${isLost ? 'bg-warm-orange/90' : 'bg-soft-teal/90'}`}>
                    {post.status}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold shadow-black drop-shadow-md">{post.title}</h3>
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-bold text-soft-teal uppercase tracking-wide">{post.pet_type}</p>
                    <p className="text-xs text-gray-400 font-semibold">2 hrs ago</p>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                    {post.description}
                </p>

                <div className="pt-4 mt-auto border-t border-gray-50 space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4 text-soft-teal flex-shrink-0" />
                        <span className="truncate">{post.location.city}, {post.location.state}</span>
                    </div>
                    {post.reward && post.reward !== 'N/A' && post.reward !== 'None' && (
                        <div className="flex items-center space-x-2 font-bold text-dark-slate text-sm">
                            <DollarSign className="h-4 w-4 text-warm-orange flex-shrink-0" />
                            <span>Reward: {post.reward}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
