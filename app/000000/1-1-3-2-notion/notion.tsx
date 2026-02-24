"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './notion.css';

const Navigation = () => {
  const pathname = usePathname(); 


  return (
    <header className="header">
      <Link href="/"className="logo-link"onClick={(e) => {e.preventDefault();window.location.href = "/";}}>
        <Image src="/elif-logo/effortlessworksdark.svg" alt="Elif Çakmak Logo" width={100} height={100} />
      </Link>
      <Link href="/000002/business" className="logo-link">
        <Image src="/nav-titles/biz-nav.svg" alt="Elif Çakmak Logo" width={300} height={300}  />
      </Link>
      <nav className="nav">
        <Link href="/" className={`Home-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/000002/business" className={`nav-link ${pathname === '/000002/business' ? 'active' : ''}`}>Business 🏢</Link>
        <Link href="/000003/projectmanagement" className={`nav-link ${pathname === '/000003/projectmanagement' ? 'active' : ''}`}>Project Management 📋</Link>
        <Link href="/000010/pm-sheets" className={`newsletter-button ${pathname === '/000010/pm-sheets' ? 'active' : ''}`}>Sheets</Link>
        <Link href="/000010/pm-notion" className={`newsletter-button ${pathname === '/000010/pm-notion' ? 'active' : ''}`}>Notion</Link>
      </nav>
    </header>
  );
};

export default Navigation;
