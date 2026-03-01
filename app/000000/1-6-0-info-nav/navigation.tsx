"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './navigation.css';

const Navigation = () => {
  const pathname = usePathname(); 

  return (
    <header className="header">
      <Link href="/"className="logo-link logo-effortless"onClick={(e) => {e.preventDefault();window.location.href = "/";}}>
        <Image src="/Website-Logo/effortlessworksdark.svg" alt="Effortless Works Logo" width={200} height={200} />
      </Link>
      <Link href="/000002/info" className="logo-link">
        <Image src="/nav-titles/info-nav.svg" alt="Effortless Works Logo" width={320} height={320}  />
      </Link>
      <nav className="nav">
  {/* LEFT SIDE */}
  <Link
    href="/"
    className={`newsletter-button ${pathname === '/' ? 'active' : ''}`}
    onClick={(e) => {
      e.preventDefault();
      window.location.href = "/";
    }}
  >
    Main Home
  </Link>

  {/* RIGHT SIDE */}
  <div className="nav-right">
    <Link
      href="/000002/info"
      className={`nav-link ${pathname === '/000002/info' ? 'active' : ''}`}
    >
      Info ℹ️
    </Link>

    <Link
      href="/000007/about"
      className={`nav-link ${pathname === '/000007/about' ? 'active' : ''}`}
    >
      About
    </Link>

    <Link
      href="/000007/certifications"
      className={`nav-link ${pathname === '/000007/certifications' ? 'active' : ''}`}
    >
      Certifications
    </Link>

    <Link
      href="/000007/faq"
      className={`nav-link ${pathname === '/000007/faq' ? 'active' : ''}`}
    >
      FAQ
    </Link>

    <Link
      href="/000007/pricing"
      className={`nav-link ${pathname === '/000007/pricing' ? 'active' : ''}`}
    >
      Pricing
    </Link>
  </div>
</nav>
    </header>
  );
};

export default Navigation;
