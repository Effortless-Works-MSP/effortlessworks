"use client";
import './home-lifetracker.css';
import React from 'react';
import Link from 'next/link'; 

const LifeTrackerSection: React.FC = () => {
  return (
    <div className="lifetracker-section-container">
      <h1>Life Tracker Section</h1>
      <p>This is placeholder content for the Life Tracker section.</p>

      {/* Button linking to another page */}
      <Link href="/000004/0-0-lifetracker"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Life Tracker Page
        </button>
      </Link>
    </div>
  );
};

export default LifeTrackerSection;