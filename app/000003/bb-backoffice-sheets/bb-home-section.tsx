"use client";
import './bb-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const SheetsBackOfficeSection: React.FC = () => {
  return (
    <div className="sheets-backoffice-section-container">
      <h1>Sheets Backoffice Section</h1>
      <p>This is placeholder content for the Sheets Backoffice section.</p>

      {/* Button linking to another page */}
      <Link href="/000009/bo-sheets"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Sheets Back Office Page
        </button>
      </Link>
    </div>
  );
};

export default SheetsBackOfficeSection;