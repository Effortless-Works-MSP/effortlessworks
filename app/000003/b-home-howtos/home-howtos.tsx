"use client";
import './home-howtos.css';
import React from 'react';
import Link from 'next/link'; 

const HowTosSection: React.FC = () => {
  return (
    <div className="howtos-section-container">
      <h1>How Tos Section</h1>
      <p>This is placeholder content for the How Tos section.</p>

      {/* Button linking to another page */}
      <Link href="/000003/0-howtos"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to How Tos Page
        </button>
      </Link>
    </div>
  );
};

export default HowTosSection;