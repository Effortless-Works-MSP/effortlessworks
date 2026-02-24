"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./backoffice.css";

const navItems = [
  { href: "/", label: "Main Home", className: "backoffice-home-button" },
  { href: "/000002/business", label: "Business 🏢", className: "backoffice-nav-link" },
  { href: "/000003/backoffice#backoffice", label: "Back Office 📂", className: "backoffice-newsletter-button" },
  { href: "/000009/bo-sheets#sheets", label: "Sheets", className: "backoffice-newsletter-button" },
  { href: "/000009/bo-notion#notion", label: "Notion", className: "backoffice-newsletter-button" },
];

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
        <Link href="/" className="backoffice-logo-link">
          <Image
            src="/elif-logo/effortlessworksdark.svg"
            alt="Elif Çakmak Logo"
            width={100}
            height={100}
            className="backoffice-logo"
          />
        </Link>

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
          {navItems.map(({ href, label, className }) => (
            <Link key={href} href={href} className={className}>
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: "200px" }} />
    </>
  );
};

export default Navigation;