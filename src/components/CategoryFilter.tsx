'use client';

import { Film, Sparkles, BookOpen, Tv, Star, Grid3X3 } from 'lucide-react';
import { Category } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
  platformCounts: Record<string, number>;
}

const iconMap = {
  film: Film,
  sparkles: Sparkles,
  'book-open': BookOpen,
  tv: Tv,
  star: Star,
};

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategorySelect, 
  platformCounts 
}: CategoryFilterProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Browse Categories
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* All Categories */}
        <button
          onClick={() => onCategorySelect(null)}
          className={cn(
            "flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105",
            selectedCategory === null
              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
              : "border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 text-gray-600 dark:text-gray-400"
          )}
        >
          <Grid3X3 className="w-6 h-6 mb-2" />
          <span className="text-sm font-medium">All</span>
          <span className="text-xs opacity-75">
            {Object.values(platformCounts).reduce((a, b) => a + b, 0)}
          </span>
        </button>

        {/* Individual Categories */}
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Grid3X3;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={cn(
                "flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105",
                isSelected
                  ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
                  : "border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 text-gray-600 dark:text-gray-400"
              )}
              title={category.description}
            >
              <IconComponent className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium text-center leading-tight">
                {category.name}
              </span>
              <span className="text-xs opacity-75">
                {platformCounts[category.id] || 0}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
