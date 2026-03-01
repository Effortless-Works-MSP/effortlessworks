"use client";
import './pp-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const SheetsLifeTrackerSection: React.FC = () => {
  return (
    <div className="sheets-lifetracker-section-container">
      <h1>Sheets Life Tracker Section</h1>
      <p>This is placeholder content for the Sheets Life Tracker section.</p>

      {/* Button linking to another page */}
      <Link href="/000012/lt-sheets"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Sheets Life Tracker Page
        </button>
      </Link>
    </div>
  );
};

export default SheetsLifeTrackerSection;