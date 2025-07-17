import React, { useState } from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Navbar from './components/Navbar';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-auto">
      {/* Main content wrapper - ensures minimum width */}
      <div className="min-w-[100vw] relative"> 
        {/* Sidebar - absolute positioning instead of fixed */}
        <div 
          className={`absolute top-0 left-0 w-56 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Navbar.Sidebar setMobileOpen={setMobileOpen} />
        </div>
        
        {/* Content that shifts right - causes horizontal scrollbar */}
        <div 
          className="w-full transition-transform duration-300"
          style={{
            transform: mobileOpen ? 'translateX(14rem)' : 'translateX(0)'
          }}
        >
          <Header />
          <Navbar.Topbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          <main>
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
