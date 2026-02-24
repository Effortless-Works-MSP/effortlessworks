"use client";

import Link from "next/link";
import Image from "next/image";
import "./sheets.css";

const Navigation: React.FC = () => {
  return (
    <>
      <header className="backoffice-sheets-mainheader">
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
      </header>

      {/* Spacer to prevent content jump */}
      <div style={{ height: '310px' }} />
    </>
  );
};

export default Navigation;