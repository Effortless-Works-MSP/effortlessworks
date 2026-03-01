"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./pernotion-nav.css";

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
        className={`pers-mainheader ${scrolled ? "shrink" : ""}`}
      >
        {/* Effortless Works logo */}
        <Link href="/" className="pers-logo-link">
          <Image
            src="/Website-Logo/effortlessworksdark.svg"
            alt="Effortless Works Logo"
            width={180}
            height={180}
            className="pers-logo"
          />
        </Link>

        {/* Business logo */}
        <Link href="/000002/individual" className="pers-logo2-link">
          <Image
            src="/nav-titles/indv-nav.svg"
            alt="Effortless Works"
            width={280}
            height={280}
            className="pers-logo2"
          />
        </Link>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="pers-mainnav">
            {/* Left group */}
            <div className="nav-left">
              <Link href="/" className="pers-Home-button">
                Main Home
              </Link>

              <Link href="/000002/individual" className="pers-mainnav-link">
                Individuals 🏠
              </Link>

              <Link href="/000004/0-1-personaltracker" className="pers-mainnav-link">
                Personal Trackers 👤
              </Link>

              <Link href="/000013/pt-notion" className="pers-mainnav-link">
                Notion 📄
              </Link>
            </div>

            {/* Right group */}
            <div className="nav-right">

              <Link href="/000013/pt-sheets" className="pers-newsletter-button">
                Sheets
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