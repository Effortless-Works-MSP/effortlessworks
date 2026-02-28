"use client";
import './home-personaltracker.css';
import React from 'react';
import Link from 'next/link'; 

const PersonalTrackerSection: React.FC = () => {
  return (
    <div className="personaltracker-section-container">
      <h1>Personal Tracker Section</h1>
      <p>This is placeholder content for the Personal Tracker section.</p>

      {/* Button linking to another page */}
      <Link href="/000004/0-1-personaltracker"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Personal Tracker Page
        </button>
      </Link>
    </div>
  );
};

export default PersonalTrackerSection;