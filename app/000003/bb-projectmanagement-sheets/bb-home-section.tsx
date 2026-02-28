"use client";
import './bb-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const SheetsProjectManagementSection: React.FC = () => {
  return (
    <div className="sheets-projectmanagement-section-container">
      <h1>Sheets Project Management Section</h1>
      <p>This is placeholder content for the Sheets Project Management section.</p>

      {/* Button linking to another page */}
      <Link href="/000010/pm-sheets"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Sheets Project Management Page
        </button>
      </Link>
    </div>
  );
};

export default SheetsProjectManagementSection;