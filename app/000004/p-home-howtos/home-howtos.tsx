"use client";
import './home-howtos.css';
import React from 'react';
import Link from 'next/link'; 

const PersonalHowTosSection: React.FC = () => {
  return (
    <div className="personal-howtos-section-container">
      <h1>Personal How Tos Section</h1>
      <p>This is placeholder content for the Personal HowTos section.</p>

      {/* Button linking to another page */}
      <Link href="/000004/0-3-p-howtos"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Personal How Tos Page
        </button>
      </Link>
    </div>
  );
};

export default PersonalHowTosSection;