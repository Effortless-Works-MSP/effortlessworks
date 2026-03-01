"use client";
import './home-buildyourown.css';
import React from 'react';
import Link from 'next/link'; 

const BYOWebsiteSection: React.FC = () => {
  return (
    <div className="byo-website-section-container">
      <h1>Build Your Own Website Section</h1>
      <p>This is placeholder content for the Build Your Own Website section.</p>

      {/* Button linking to another page */}
      <Link href="/000008/website"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Website Page
        </button>
      </Link>
    </div>
  );
};

export default BYOWebsiteSection;