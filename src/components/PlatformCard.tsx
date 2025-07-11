'use client';

import { ExternalLink, Star } from 'lucide-react';
import { StreamingPlatform } from '@/types';
import { cn, generateInitials } from '@/lib/utils';
import Image from 'next/image';

interface PlatformCardProps {
  platform: StreamingPlatform;
}

const staticColor = "bg-blue-500";

export default function PlatformCard({ platform }: PlatformCardProps) {
  const handleClick = () => {
    window.open(platform.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transform hover:-translate-y-1"
    >
      {/* Featured Badge */}
      {platform.featured && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg z-10">
          <Star className="w-4 h-4 fill-current" />
        </div>
      )}

      <div className="p-6">
        {/* Logo/Avatar */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src={`/logo/${platform.category}/${platform.name}.png`}
                alt={`${platform.name} logo`}
                width={48}
                height={48}
                className="object-cover"
                suppressHydrationWarning
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {platform.name}
              </h3>
              {platform.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {platform.description}
                </p>
              )}
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
        </div>

        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
            platform.category === 'movies-shows' && "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            platform.category === 'anime' && "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
            platform.category === 'manga' && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            platform.category === 'live-tv' && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
            platform.category === 'paid-services' && "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
          )}>
            {platform.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          
          {platform.featured && (
            <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
