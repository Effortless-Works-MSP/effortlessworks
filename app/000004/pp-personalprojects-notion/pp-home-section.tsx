"use client";
import './pp-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const NotionPersonalProjectsSection: React.FC = () => {
  return (
    <div className="notion-personalprojects-section-container">
      <h1>Notion Personal Projects Section</h1>
      <p>This is placeholder content for the Notion Personal Projects section.</p>

      {/* Button linking to another page */}
      <Link href="/000014/pp-notion"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Notion Personal Projects Page
        </button>
      </Link>
    </div>
  );
};

export default NotionPersonalProjectsSection;