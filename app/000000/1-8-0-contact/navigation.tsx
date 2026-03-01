"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import './navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shrinking navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Shrinks navbar after 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`mainheader ${scrolled ? "shrink" : ""}`}>
        {/* Muslim Success Path logo */}
        <a
          href="https://www.muslimsuccesspath.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <Image
            src="/Website-Logo/MuslimSuccessPath-White.svg"
            alt="Muslim Success Path Logo"
            width={280}
            height={280}
            className="logo"
          />
        </a>

        {/* Main logo now goes to home page */}
        <Link href="/" className="logo-link">
          <Image
            src="/Website-Logo/effortlessworks.svg"
            alt="Effortless Works"
            width={180}
            height={180}
            className="logo2"
          />
        </Link>

        {/* Navigation buttons */}
        <nav className="mainnav">
          <Link href="/" className="Home-button">
                Main Home
          </Link>

          <Link href="/000002/business" className="mainnav-link">
                Business 🏢
          </Link>

          <Link href="/000002/individual" className="mainnav-link">
                Individuals 🏠
          </Link>

          <Link href="/000002/buildyourown" className="mainnav-link">
                Build Your Own ➡️
          </Link>

          <Link href="/000002/quest" className="mainnav-link">
                Quest ⚔️
          </Link>

          <Link href="/000002/courses" className="mainnav-link">
                Courses 📚
          </Link>

          <Link href="/000002/info" className="mainnav-link">
                Info ℹ️
          </Link>
          
          <Link href="/000002/contact" className="newsletter-button">
                Contact
          </Link>
        </nav>
      </header>

      {/* Spacer to prevent content jump */}
      <div style={{ height: '280px' }} />
    </>
  );
};

export default Navigation;