"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./backoffice.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`backoffice-header ${scrolled ? "shrink" : ""}`}>
        {/* Main Logo */}
        <a
          href="/"
          className="backoffice-logo-link"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          <Image
            src="/elif-logo/effortlessworksdark.svg"
            alt="Elif Çakmak Logo"
            width={100}
            height={100}
            className="backoffice-logo"
          />
        </a>

        {/* Backoffice Title Logo */}
        <Link href="/000002/business" className="backoffice-logo-link">
          <Image
            src="/nav-titles/biz-nav.svg"
            alt="Backoffice Logo"
            width={300}
            height={300}
            className="backoffice-logo2"
          />
        </Link>

        {/* Navigation */}
        <nav className="backoffice-nav">
          <Link href="/" className="backoffice-Home-button">
            Main Home
          </Link>

          <Link href="/000002/business" className="backoffice-nav-link">
            Business 🏢
          </Link>

          {/* Anchor links */}
          <Link href="/000003/backoffice#backoffice" className="backoffice-newsletter-button">
            Back Office 📂
          </Link>

          <Link href="/000009/bo-sheets#sheets" className="backoffice-newsletter-button">
            Sheets
          </Link>

          <Link href="/000009/bo-notion#notion" className="backoffice-newsletter-button">
            Notion
          </Link>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: "200px" }} />
    </>
  );
};

export default Navigation;