"use client";
import './home-buildyourown.css';
import React from 'react';
import Link from 'next/link'; 

const BYONotionSection: React.FC = () => {
  return (
    <div className="byo-notion-section-container">
      <h1>Build Your Own Notion Section</h1>
      <p>This is placeholder content for the Build Your Own Notion section.</p>

      {/* Button linking to another page */}
      <Link href="/000008/notion"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Notion Page
        </button>
      </Link>
    </div>
  );
};

export default BYONotionSection;