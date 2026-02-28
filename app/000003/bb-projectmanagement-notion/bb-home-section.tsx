"use client";
import './bb-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const NotionProjectManagementSection: React.FC = () => {
  return (
    <div className="notion-projectmanagement-section-container">
      <h1>Notion Project Management Section</h1>
      <p>This is placeholder content for the Notion Project Management section.</p>

      {/* Button linking to another page */}
      <Link href="/000010/pm-notion"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Notion Project Management Page
        </button>
      </Link>
    </div>
  );
};

export default NotionProjectManagementSection;