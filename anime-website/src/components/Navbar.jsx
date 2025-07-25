import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-gradient-to-b from-black/80 to-transparent fixed w-full z-20">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-red-600 tracking-tight">ANIMEFLIX</span>
        <ul className="hidden md:flex gap-6 ml-8 text-sm font-semibold">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Anime List</li>
          <li className="hover:text-red-500 cursor-pointer">New Releases</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">U</div>
      </div>
    </nav>
  );
}

export default Navbar;