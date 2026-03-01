"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navigation.css";

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
        className={`quest-mainheader ${scrolled ? "shrink" : ""}`}
      >
        {/* Left side: Logo */}
        <div className="nav-left">
          <Link href="/" className="quest-logo-link">
            <Image
              src="/Website-Logo/effortlessworksdark.svg"
              alt="Effortless Works Logo"
              width={180}
              height={180}
              className="quest-logo"
            />
          </Link>
        </div>

        {/* Right side: Button */}
        {showNav && (
          <div className="nav-right">
            <Link href="/" className="quest-Home-button">
              Main Home
            </Link>
          </div>
        )}
      </header>

      {/* Spacer to prevent content jump */}
      <div style={{ height: '380px' }} />
    </>
  );
};

export default Navigation;