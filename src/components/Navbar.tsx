import React from 'react';
import { FileText, Info, Lightbulb } from 'lucide-react';

interface NavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavProps) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">MD Convert</span>
          </div>
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveSection('converter')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                activeSection === 'converter'
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Converter
            </button>
            <button
              onClick={() => setActiveSection('features')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                activeSection === 'features'
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <Lightbulb className="w-4 h-4 mr-1" />
              Features
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                activeSection === 'about'
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <Info className="w-4 h-4 mr-1" />
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}