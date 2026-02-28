"use client";
import './home-personalprojects.css';
import React from 'react';
import Link from 'next/link'; 

const PersonalProjectsSection: React.FC = () => {
  return (
    <div className="personalprojects-section-container">
      <h1>Personal Projects Section</h1>
      <p>This is placeholder content for the Personal Projects section.</p>

      {/* Button linking to another page */}
      <Link href="/000004/0-2-personalprojects"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Personal Projects Page
        </button>
      </Link>
    </div>
  );
};

export default PersonalProjectsSection;