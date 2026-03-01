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

  // Smooth scroll to section, offset by header height
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element || !headerRef.current) return;

    const headerHeight = headerRef.current.offsetHeight;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - headerHeight - 10, // extra spacing
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`courses-pv-mainheader ${scrolled ? "shrink" : ""}`}
      >
        {/* Effortless Works logo */}
        <Link href="/" className="courses-pv-logo-link">
          <Image
            src="/Website-Logo/effortlessworksdark.svg"
            alt="Effortless Works Logo"
            width={180}
            height={180}
            className="courses-pv-logo"
          />
        </Link>

        {/* Courses logo */}
        <Link href="/000002/courses" className="courses-pv-logo-link">
          <Image
            src="/nav-titles/courses-nav.svg"
            alt="Effortless Works"
            width={320}
            height={320}
            className="courses-pv-logo2"
          />
        </Link>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="courses-pv-mainnav">
            {/* Left group */}
            <div className="nav-left">
              <Link href="/" className="courses-pv-home-button">
                Main Home
              </Link>

              <Link href="/000002/courses" className="courses-pv-mainnav-link">
                Courses 📚
              </Link>

              <Link href="/000017/c-productvideo" className="courses-pv-mainnav-link">
                Product Videos 🎥
              </Link>
            </div>

            {/* Right group */}
            <div className="nav-right">

              <button
                onClick={() => scrollToSection("Business")}
                className="courses-pv-newsletter-button"
              >
                Business
              </button>

              <button
                onClick={() => scrollToSection("Individual")}
                className="courses-pv-newsletter-button"
              >
                Individual
              </button>
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