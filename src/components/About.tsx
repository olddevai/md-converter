import React from 'react';
import { Github, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About MD Convert
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A powerful, open-source Markdown converter built with modern web technologies
          </p>
        </div>

        <div className="mt-10">
          <div className="prose prose-indigo mx-auto">
            <p className="text-gray-500 leading-relaxed">
              MD Convert is a free, open-source tool designed to make document conversion simple and efficient. 
              Built with React and TypeScript, it provides a seamless experience for converting Markdown documents 
              to various formats while maintaining the highest standards of code quality and performance.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900">Why MD Convert?</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-500">✓ No server-side processing - all conversions happen in your browser</li>
                <li className="text-gray-500">✓ Privacy-focused - your content never leaves your device</li>
                <li className="text-gray-500">✓ Modern, responsive design that works on all devices</li>
                <li className="text-gray-500">✓ Regular updates and active development</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900">Connect With Us</h3>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}