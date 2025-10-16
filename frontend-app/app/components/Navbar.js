"use client"; // ✅ Required in Next.js (since we use useEffect)

import React, { useEffect, useState } from "react";
import Link from "next/link"; // optional: if navbar styles live there
import Image from "next/image";

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav className={`navbar ${isSolid ? "solid" : ""}`}>
  <div className="navbar-container">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="My Logo"
        width={90}   // square dimensions
        height={90}   // square dimensions
      />
    </Link>

    <ul className="navbar-links">
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#services">Services</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
