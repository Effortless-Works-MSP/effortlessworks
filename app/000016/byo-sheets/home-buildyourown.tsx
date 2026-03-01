"use client";
import './home-buildyourown.css';
import React from 'react';
import Link from 'next/link'; 

const BYOSheetsSection: React.FC = () => {
  return (
    <div className="byo-sheets-section-container">
      <h1>Build Your Own Sheets Section</h1>
      <p>This is placeholder content for the Build Your Own Sheets section.</p>

      {/* Button linking to another page */}
      <Link href="/000008/sheets"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Sheets Page
        </button>
      </Link>
    </div>
  );
};

export default BYOSheetsSection;