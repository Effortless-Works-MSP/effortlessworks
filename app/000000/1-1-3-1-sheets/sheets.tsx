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

  return (
    <>
      <header
        ref={headerRef}
        className={`projectmanagement-sheets-mainheader ${scrolled ? "shrink" : ""}`}
      >
        {/* Effortless Works logo */}
        <Link href="/" className="projectmanagement-sheets-logo-link">
          <Image
            src="/Website-Logo/effortlessworksdark.svg"
            alt="Effortless Works Logo"
            width={180}
            height={180}
            className="projectmanagement-sheets-logo"
          />
        </Link>

        {/* Business logo */}
        <Link href="/000002/business" className="projectmanagement-sheets-logo-link">
          <Image
            src="/nav-titles/biz-nav.svg"
            alt="Effortless Works"
            width={280}
            height={280}
            className="projectmanagement-sheets-logo2"
          />
        </Link>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="projectmanagement-sheets-mainnav">
            {/* LEFT GROUP */}
            <div className="nav-left">
              <Link href="/" className="projectmanagement-sheets-Home-button">
                Main Home
              </Link>

              <Link href="/000002/business" className="projectmanagement-sheets-mainnav-link">
                Business 🏢
              </Link>

              <Link href="/000003/0-projectmanagement" className="projectmanagement-mainnav-link">
                Project Management 📋
              </Link>

              <Link href="/000010/pm-sheets" className="projectmanagement-sheets-mainnav-link">
              PM Sheets 📄
            </Link>
            </div>

            {/* RIGHT GROUP */}
            <div className="nav-right">
              <Link
                href="/000010/pm-notion"
                className="projectmanagement-sheets-newsletter-button"
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