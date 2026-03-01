"use client";
import './pp-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const NotionLifeTrackerSection: React.FC = () => {
  return (
    <div className="notion-lifetracker-section-container">
      <h1>Notion Life Tracker Section</h1>
      <p>This is placeholder content for the Notion Life Tracker section.</p>

      {/* Button linking to another page */}
      <Link href="/000012/lt-notion"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Notion Life Tracker Page
        </button>
      </Link>
    </div>
  );
};

export default NotionLifeTrackerSection;