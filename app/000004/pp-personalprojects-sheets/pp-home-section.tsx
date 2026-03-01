"use client";
import './pp-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const SheetsPersonalProjectsSection: React.FC = () => {
  return (
    <div className="sheets-personalprojects-section-container">
      <h1>Sheets Personal Projects Section</h1>
      <p>This is placeholder content for the Sheets Personal Projects section.</p>

      {/* Button linking to another page */}
      <Link href="/000014/pp-sheets"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Sheets Personal Projects Page
        </button>
      </Link>
    </div>
  );
};

export default SheetsPersonalProjectsSection;