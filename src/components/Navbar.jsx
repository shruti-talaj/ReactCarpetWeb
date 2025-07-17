import React, { useState } from 'react';

// Topbar for mobile and desktop
function Topbar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-[#D0632A]">
        <div className="flex items-center justify-between px-4 h-12">
          <button
            className="flex items-center text-white font-bold"
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {/* Hamburger Icon */}
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
            MENU
          </button>
          <div className="flex items-center text-white font-bold">
            <img src="/images/phone-icon-hi.png" alt="Phone" className="w-5 h-5 mr-2" />
            <span>1300 558 509</span>
          </div>
        </div>
      </div>
      {/* Desktop/Tablet Navbar */}
      <nav className="hidden md:flex bg-white shadow-md h-16 items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <select className="border rounded px-2 py-1">
              <option>Menu 1</option>
              <option>Menu 2</option>
              <option>Menu 3</option>
            </select>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Ask Question
            </button>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <img src="/images/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
          <div className="flex items-center text-[#D0632A] font-bold">
            <img src="/images/phone-icon-hi.png" alt="Phone" className="w-5 h-5 mr-2" />
            <span>1300 558 509</span>
          </div>
        </div>
      </nav>
    </>
  );
}

// Sidebar for mobile
function Sidebar({ setMobileOpen }) {
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  
  // Helper function to close sidebar when menu items are clicked
  const handleItemClick = () => {
    setMobileOpen(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-4 h-12 bg-[#D0632A]">
        <span className="text-white font-bold">MENU</span>
        <button
          className="text-white text-2xl"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      <ul className="flex-1 overflow-y-auto">
        <li className="p-4 border-b"><a href="#" onClick={handleItemClick}>Home</a></li>
        <li className="p-4 border-b"><a href="#" onClick={handleItemClick}>About</a></li>
        <li className="p-4 border-b">
          <button
            onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
            className="flex items-center w-full"
          >
            Services
            <span className="ml-2">{mobileSubmenuOpen ? '▲' : '▼'}</span>
          </button>
          {mobileSubmenuOpen && (
            <ul className="bg-gray-100 mt-2 rounded">
              <li className="p-2 hover:bg-gray-200"><a href="#" onClick={handleItemClick}>Subitem 1</a></li>
              <li className="p-2 hover:bg-gray-200"><a href="#" onClick={handleItemClick}>Subitem 2</a></li>
            </ul>
          )}
        </li>
        <li className="p-4"><a href="#" onClick={handleItemClick}>Contact</a></li>
      </ul>
    </div>
  );
}

// Export as properties for easy import in App.jsx
const Navbar = { Topbar, Sidebar };
export default Navbar;