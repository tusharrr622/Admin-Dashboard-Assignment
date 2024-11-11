"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>

      <button
        className="p-4 bg-blue-500 text-white fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >

        <div className="pt-16">
          <nav className="flex flex-col space-y-4">
            <a href="#user-metrics" className="hover:bg-gray-700 p-2 rounded">
              User Metrics Chart
            </a>
            <a href="#content-metrics" className="hover:bg-gray-700 p-2 rounded">
              Content Metrics Chart
            </a>
            <a href="#engagement-metrics" className="hover:bg-gray-700 p-2 rounded">
              Engagement Metrics Chart
            </a>
            <a href="#blockchain-metrics" className="hover:bg-gray-700 p-2 rounded">
              Blockchain Metrics Chart
            </a>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

