'use client';

import { Shield, AlertTriangle, ExternalLink } from 'lucide-react';

export default function WarningBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Important Notice
          </h3>
          
          <div className="space-y-3 text-sm text-yellow-700 dark:text-yellow-300">
            <p>
              Please click and download{' '}
              <a 
                href="https://brave.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-yellow-900 dark:hover:text-yellow-100 inline-flex items-center"
              >
                BRAVE Browser <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              {' '}OR use this AdBlocker{' '}
              <a 
                href="https://ublockorigin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-yellow-900 dark:hover:text-yellow-100 inline-flex items-center"
              >
                uBlock Origin <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              {' '}BEFORE clicking on one of the links below (Otherwise you will see ads/popups!)
            </p>
            
            <div className="flex items-center space-x-2 p-3 bg-yellow-100 dark:bg-yellow-800/30 rounded-lg">
              <Shield className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              <p className="font-medium">
                <strong>Disclaimer:</strong> We do not own or host any content from these sites. 
                This page simply provides links for reference purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
