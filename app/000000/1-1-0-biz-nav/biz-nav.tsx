"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./biz-nav.css";

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
        className={`business-mainheader ${scrolled ? "shrink" : ""}`}
      >
        {/* Blog logo */}
        <a href="https://www.elifcakmak.blog/" className="business-logo-link">
          <Image
            src="/elif-logo/elifcakmaklogo.svg"
            alt="Elif Çakmak Logo"
            width={100}
            height={100}
            className="business-logo"
          />
        </a>

        {/* Main Home logo */}
        <Link href="/" className="business-logo-link">
          <Image
            src="/elif-logo/effortlessworksdark.svg"
            alt="Effortless Works"
            width={100}
            height={100}
            className="business-logo2"
          />
        </Link>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="business-mainnav">
            {/* Main Home button as Link */}
            <Link href="/" className="business-Home-button">
              Main Home
            </Link>

            {/* Business button as Link */}
            <Link href="/000002/business" className="business-mainnav-link">
              Business 🏢
            </Link>

            {/* Anchor links that scroll */}
            <button
              onClick={() => scrollToSection("backoffice")}
              className="business-newsletter-button"
            >
              Back Office
            </button>

            <button
              onClick={() => scrollToSection("projectmanagement")}
              className="business-newsletter-button"
            >
              Project Management
            </button>

            <button
              onClick={() => scrollToSection("howtos")}
              className="business-newsletter-button"
            >
              How Tos
            </button>
          </nav>
        )}
      </header>

      {/* Spacer to prevent content jump */}
      <div style={{ height: '280px' }} />
    </>
  );
};

export default Navigation;