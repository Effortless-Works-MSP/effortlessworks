"use client";
import './pp-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const SheetsPersonalTrackerSection: React.FC = () => {
  return (
    <div className="sheets-personaltracker-section-container">
      <h1>Sheets Personal Tracker Section</h1>
      <p>This is placeholder content for the Sheets Personal Tracker section.</p>

      {/* Button linking to another page */}
      <Link href="/000013/pt-sheets"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Sheets Personal Tracker Page
        </button>
      </Link>
    </div>
  );
};

export default SheetsPersonalTrackerSection;