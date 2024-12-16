import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Converter from './components/Converter';
import Features from './components/Features';
import About from './components/About';

function App() {
  const [activeSection, setActiveSection] = useState('converter');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'converter' && <Converter />}
        {activeSection === 'features' && <Features />}
        {activeSection === 'about' && <About />}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MD Convert. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;