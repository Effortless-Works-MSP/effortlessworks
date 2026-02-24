"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./sheets.css";

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
        className={`backoffice-sheets-mainheader ${scrolled ? "shrink" : ""}`}
      >
        {/* Blog logo */}
        <a href="https://www.elifcakmak.blog/" className="backoffice-sheets-logo-link">
          <Image
            src="/elif-logo/effortlessworksdark.svg"
            alt="Elif Çakmak Logo"
            width={100}
            height={100}
            className="backoffice-sheets-logo"
          />
        </a>

        {/* Main Home logo */}
        <Link href="/" className="backoffice-sheets-logo-link">
          <Image
            src="/nav-titles/biz-nav.svg"
            alt="Effortless Works"
            width={100}
            height={100}
            className="backoffice-sheets-logo2"
          />
        </Link>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="backoffice-sheets-mainnav">
            {/* LEFT GROUP */}
            <div className="nav-left">
              <Link href="/" className="backoffice-sheets-Home-button">
                Main Home
              </Link>

              <Link href="/000002/business" className="backoffice-sheets-mainnav-link">
                Business 🏢
              </Link>

              <Link href="/000003/backoffice" className="backoffice-sheets-mainnav-link">
                Back Office 📂
              </Link>

              <Link href="/000009/bo-sheets" className="backoffice-sheets-mainnav-link">
                Backoffice Sheets 📄
              </Link>
            </div>

            {/* RIGHT GROUP */}
            <div className="nav-right">
              <Link
                href="/000009/bo-notion"
                className="backoffice-sheets-newsletter-button"
              >
                Notion
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Spacer to prevent content jump */}
      <div style={{ height: '310px' }} />
    </>
  );
};

export default Navigation;