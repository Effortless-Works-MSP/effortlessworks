"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import './navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shrinking navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Shrinks navbar after 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to a section smoothly, offset by navbar height
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navbar = document.querySelector('.mainheader') as HTMLElement | null;
    let navbarHeight = 0;

    if (navbar) {
      navbarHeight = navbar.getBoundingClientRect().height;
    }

    const extraOffset = 15; // scroll a little higher than just below the navbar
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementTop - navbarHeight - extraOffset,
      behavior: 'smooth',
    });
  }
};

  return (
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

      {/* Main logo that scrolls home */}
      <button onClick={() => scrollToSection("mainhome")} className="logo-link">
        <Image
          src="/elif-logo/effortlessworks.svg"
          alt="Effortless Works"
          width={100}
          height={100}
          className="logo2"
        />
      </button>

      {/* Navigation buttons */}
      <nav className="mainnav">
        <button onClick={() => scrollToSection("mainhome")} className="newsletter-button">
          Main Home
        </button>

        <button onClick={() => scrollToSection("business")} className="mainnav-link">
          Business 🏢
        </button>

        <button onClick={() => scrollToSection("individual")} className="mainnav-link">
          Individuals 🏠
        </button>

        <button onClick={() => scrollToSection("buildyourown")} className="mainnav-link">
          Build Your Own ➡️
        </button>

        <button onClick={() => scrollToSection("quest")} className="mainnav-link">
          Quest ⚔️
        </button>

        <button onClick={() => scrollToSection("courses")} className="mainnav-link">
          Courses 📚
        </button>

        <button onClick={() => scrollToSection("info")} className="mainnav-link">
          Info ℹ️
        </button>

        <button onClick={() => scrollToSection("contact")} className="newsletter-button">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navigation;