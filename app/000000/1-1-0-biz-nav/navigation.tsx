"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navigation.css";

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
    <header className={`mainheader ${scrolled ? "shrink" : ""}`}>
      {/* Blog logo */}
      <a href="https://www.elifcakmak.blog/" className="logo-link">
        <Image
          src="/elif-logo/elifcakmaklogo.svg"
          alt="Elif Çakmak Logo"
          width={100}
          height={100}
          className="logo"
        />
      </a>

      {/* Main Home logo */}
      <Link href="/" className="logo-link">
        <Image
          src="/elif-logo/effortlessworksdark.svg"
          alt="Effortless Works"
          width={100}
          height={100}
          className="logo2"
        />
      </Link>

      {/* Navigation */}
      <nav className="mainnav">
        {/* Goes to whole site home */}
        <Link href="/" className="Home-button">
          Main Home
        </Link>

        {/* Goes to business home page */}
        <Link href="/000002/business" className="mainnav-link">
          Business 🏢
        </Link>

        {/* Scroll buttons (use query params to navigate + scroll) */}
        <Link href="/000002/business?scroll=backoffice" className="newsletter-button">
          Back Office
        </Link>

        <Link href="/000002/business?scroll=projectmanagement" className="newsletter-button">
          Project Management
        </Link>

        <Link href="/000002/business?scroll=howtos" className="newsletter-button">
          How Tos
        </Link>
      </nav>
    </header>
    {/* Spacer div pushes content below fixed header */}
      <div style={{ height: '210px' }} />
    </>
  );
};

export default Navigation;