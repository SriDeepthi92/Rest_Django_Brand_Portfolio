"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        {/* LEFT: logo + nav links */}
        <div className="flex items-center space-x-10">
          {/* logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: 140 }}
              className="object-contain"
            />
          </a>

          {/* nav links */}
          <ul className="flex items-center space-x-6 text-[12.5px] tracking-[0.1em] font-normal text-gray-800 uppercase">
            <li>
              <a
                href="/"
                className="hover:text-gray-500 transition-colors duration-200"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/everyday-rugs"
                className="hover:text-gray-500 transition-colors duration-200 whitespace-nowrap"
              >
                Everyday Rugs
              </a>
            </li>
    
            <li>
              <a
                href="/signature-rugs"
                className="hover:text-gray-500 transition-colors duration-200 whitespace-nowrap"
              >
                Signature Rugs
              </a>
            </li>
            <li>
              <a
                href="/mystery-rug"
                className="hover:text-gray-500 transition-colors duration-200 whitespace-nowrap"
              >
                Mystery Rug
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT: icons */}
        <div className="flex items-center space-x-6 text-gray-800">
          {/* search */}
          <button aria-label="Search" className="p-1.5 hover:text-gray-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle 
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          {/* account */}
          <a href="/account" aria-label="Account" className="p-1.5 hover:text-gray-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 21c0-3.9 3.6-7 9-7s9 3.1 9 7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>

          {/* cart */}
          <a href="/cart" aria-label="Cart" className="p-1.5 hover:text-gray-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6h15l-1.5 9h-12z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="9" cy="20" r="1" fill="currentColor" />
              <circle cx="18" cy="20" r="1" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}