"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./p-productvideos.css";

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false); // shrink state
  const [showNav, setShowNav] = useState(true);    // mobile nav visibility
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;

      setScrolled(currentScrollY > 50);

      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNav(false); // hide nav scrolling down
        } else {
          setShowNav(true);  // show nav scrolling up
        }
      } else {
        setShowNav(true); // always show on desktop
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  
  return (
    <>
      <header
        ref={headerRef}
        className={`p-productvideos-mainheader ${scrolled ? "shrink" : ""}`}
      >
        {/* Effortless Works logo */}
        <Link href="/" className="p-productvideos-logo-link">
          <Image
            src="/Website-Logo/effortlessworksdark.svg"
            alt="Effortless Works Logo"
            width={180}
            height={180}
            className="p-productvideos-logo"
          />
        </Link>

        {/* Business logo */}
        <Link href="/000002/individual" className="p-productvideos-logo2-link">
          <Image
            src="/nav-titles/indv-nav.svg"
            alt="Effortless Works"
            width={280}
            height={280}
            className="p-productvideos-logo2"
          />
        </Link>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="p-productvideos-mainnav">
            {/* Left group */}
            <div className="nav-left">
              <Link href="/" className="p-productvideos-Home-button">
                Main Home
              </Link>

              <Link href="/000002/individual" className="p-productvideos-mainnav-link">
                Individuals 🏠
              </Link>

              <Link href="/000004/0-3-p-howtos" className="p-productvideos-mainnav-link">
                How Tos 🎥
              </Link>

              <Link href="/000015/p-productvideos" className="p-productvideos-mainnav-link">
                Product Videos 🎬
              </Link>
            </div>

            {/* Right group */}
            <div className="nav-right">

              <Link href="/000015/p-selfpaced" className="p-productvideos-newsletter-button">
                Self Paced Courses
              </Link>

              <Link href="/000015/p-instructorled" className="p-productvideos-newsletter-button">
                Instructor Led Courses
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Spacer to prevent content jump */}
      <div style={{ height: '340px' }} />
    </>
  );
};

export default Navigation;