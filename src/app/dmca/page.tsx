'use client';

import { ArrowLeft, Mail, FileText, Shield } from 'lucide-react';
import Link from 'next/link';

export default function DMCAPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  DMCA Policy
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Digital Millennium Copyright Act Compliance
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Important Notice
              </h2>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                TBCPL (The Best Couch Potato List) does not host, store, or distribute any copyrighted content. 
                We merely provide links to third-party websites. All content is hosted on external platforms 
                beyond our control.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* What is DMCA */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  What is DMCA?
                </h2>
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    The Digital Millennium Copyright Act (DMCA) is a United States copyright law that 
                    provides a framework for copyright holders to request removal of infringing content 
                    from websites and online platforms.
                  </p>
                </div>
              </section>

              {/* Our Position */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Position
                </h2>
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    TBCPL respects intellectual property rights and complies with applicable copyright laws. 
                    Since we do not host any content directly, we serve only as a directory of links to 
                    third-party websites.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>We do not upload, store, or distribute copyrighted content</li>
                    <li>We do not control the content hosted on linked external websites</li>
                    <li>Users access external content directly from third-party sources</li>
                    <li>We promptly respond to valid DMCA takedown requests</li>
                  </ul>
                </div>
              </section>

              {/* Filing a DMCA Request */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  Filing a DMCA Takedown Request
                </h2>
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    If you believe that content linked through our platform infringes your copyright, 
                    you may submit a DMCA takedown notice. Your notice must include:
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Your physical or electronic signature</li>
                    <li>Identification of the copyrighted work claimed to be infringed</li>
                    <li>Identification of the allegedly infringing material and its location</li>
                    <li>Your contact information (address, phone number, email)</li>
                    <li>A statement of good faith belief that the use is not authorized</li>
                    <li>A statement that the information is accurate and you are authorized to act</li>
                  </ol>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    For DMCA-related inquiries, please contact us through our official channels:
                  </p>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="https://discord.gg/Dsts8Y2jWz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700"
                    >
                      Discord Server: TBCPL Community
                    </a>
                    <a 
                      href="https://github.com/N3rdmade/TBCPL/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </section>

              {/* Response Time */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Response Time
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We will review all valid DMCA takedown requests and respond within a reasonable 
                  timeframe, typically within 24-48 hours. Upon receiving a valid notice, we will 
                  remove the offending links from our directory.
                </p>
              </section>

              {/* Counter-Notice */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Counter-Notice Procedure
                </h2>
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    If you believe that content was removed due to a mistake or misidentification, 
                    you may submit a counter-notice following DMCA procedures. We will forward 
                    valid counter-notices to the original complainant.
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                This policy was last updated on July 10, 2025. 
                We reserve the right to modify this policy at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
