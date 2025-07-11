'use client';

import { Github, MessageCircle, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-lg">
                <span className="text-lg font-bold">TBCPL</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                The Best Couch Potato List
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Your ultimate streaming guide. Discover the best platforms for movies, shows, anime, manga, and live TV. 
              Curated with love for all couch potatoes out there.
            </p>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h4>
            <div className="space-y-3">
              <a
                href="https://discord.gg/Dsts8Y2jWz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Discord Server</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.reddit.com/r/TBCPL/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">r</span>
                </div>
                <span>Reddit Community</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/N3rdmade/TBCPL/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Legal & Info
            </h4>
            <div className="space-y-3">
              <a
                href="/dmca"
                className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                DMCA Policy
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                <strong>Disclaimer:</strong> We do not own or host any content. 
                This page provides links for reference only.
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600">
                Share responsibly and respect content creators.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>© 2024 TBCPL. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Thrown Together By</span>
              <span className="font-semibold text-purple-600 dark:text-purple-400">Hellhorde</span>
              <span>with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
