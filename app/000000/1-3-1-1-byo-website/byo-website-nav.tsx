"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./byo-website-nav.css";

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
        className={`byo-mainheader ${scrolled ? "shrink" : ""}`}
      >
        {/* Effortless Works logo */}
        <Link href="/" className="byo-logo-link">
          <Image
            src="/Website-Logo/effortlessworksdark.svg"
            alt="Effortless Works Logo"
            width={180}
            height={180}
            className="byo-logo"
          />
        </Link>

        {/* Business logo */}
        <Link href="/000002/buildyourown" className="byo-logo-link">
          <Image
            src="/nav-titles/buildyourown.svg"
            alt="Build Your Own Logo"
            width={280}
            height={280}
            className="byo-logo2"
          />
        </Link>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="byo-mainnav">
            {/* Left group */}
            <div className="nav-left">
              <Link href="/" className="byo-Home-button">
                Main Home
              </Link>

              <Link href="/000002/buildyourown" className="byo-mainnav-link">
                Build Your Own ➡️
              </Link>

              <Link href="/000008/website" className="byo-mainnav-link">
                Website 💻
              </Link>
            </div>

            {/* Right group */}
            <div className="nav-right">
              

              <Link href="/000008/app" className="byo-newsletter-button">
                App
              </Link>

              <Link href="/000008/onboarding" className="byo-newsletter-button">
                Onboarding Course
              </Link>

              <Link href="/000008/sheets" className="byo-newsletter-button">
                Sheets System
              </Link>

              <Link href="/000008/notion" className="byo-newsletter-button">
                Notion System
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Spacer to prevent content jump */}
      <div style={{ height: '380px' }} />
    </>
  );
};

export default Navigation;