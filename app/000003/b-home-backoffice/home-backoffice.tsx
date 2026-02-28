"use client";
import './home-backoffice.css';
import React from 'react';
import Link from 'next/link'; 

const BackOfficeSection: React.FC = () => {
  return (
    <div className="backoffice-section-container">
      <h1>Backoffice Section</h1>
      <p>This is placeholder content for the Backoffice section.</p>

      {/* Button linking to another page */}
      <Link href="/000003/0-backoffice"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Back Office Page
        </button>
      </Link>
    </div>
  );
};

export default BackOfficeSection;