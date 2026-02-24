"use client";
import './bb-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const NotionBackOfficeSection: React.FC = () => {
  return (
    <div className="notion-backoffice-section-container">
      <h1>Notion Backoffice Section</h1>
      <p>This is placeholder content for the Notion Backoffice section.</p>

      {/* Button linking to another page */}
      <Link href="/000009/bo-notion"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Notion Back Office Page
        </button>
      </Link>
    </div>
  );
};

export default NotionBackOfficeSection;