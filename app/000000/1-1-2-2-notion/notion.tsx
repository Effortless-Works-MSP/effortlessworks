"use client";

import Link from "next/link";
import Image from "next/image";
import "./notion.css";

const Navigation: React.FC = () => {
  return (
    <>
      <header className="backoffice-notion-mainheader">
        {/* Blog logo */}
        <a href="https://www.elifcakmak.blog/" className="backoffice-notion-logo-link">
          <Image
            src="/elif-logo/effortlessworksdark.svg"
            alt="Elif Çakmak Logo"
            width={100}
            height={100}
            className="backoffice-notion-logo"
          />
        </a>

        {/* Main Home logo */}
        <Link href="/" className="backoffice-notion-logo-link">
          <Image
            src="/nav-titles/biz-nav.svg"
            alt="Effortless Works"
            width={100}
            height={100}
            className="backoffice-notion-logo2"
          />
        </Link>

        <nav className="backoffice-notion-mainnav">
          {/* LEFT GROUP */}
          <div className="nav-left">
            <Link href="/" className="backoffice-notion-Home-button">
              Main Home
            </Link>

            <Link href="/000002/business" className="backoffice-notion-mainnav-link">
              Business 🏢
            </Link>

            <Link href="/000003/backoffice" className="backoffice-notion-mainnav-link">
              Back Office 📂
            </Link>

            <Link href="/000009/bo-notion" className="backoffice-notion-mainnav-link">
              Backoffice Notion 📄
            </Link>
          </div>

          {/* RIGHT GROUP */}
          <div className="nav-right">
            <Link
              href="/000009/bo-sheets"
              className="backoffice-notion-newsletter-button"
            >
              Sheets
            </Link>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content jump */}
      <div style={{ height: '310px' }} />
    </>
  );
};

export default Navigation;