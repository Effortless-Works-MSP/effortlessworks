"use client";
import './pp-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const NotionPersonalTrackerSection: React.FC = () => {
  return (
    <div className="notion-personaltracker-section-container">
      <h1>Notion Personal Tracker Section</h1>
      <p>This is placeholder content for the Notion Personal Tracker section.</p>

      {/* Button linking to another page */}
      <Link href="/000013/pt-notion"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Notion Personal Tracker Page
        </button>
      </Link>
    </div>
  );
};

export default NotionPersonalTrackerSection;