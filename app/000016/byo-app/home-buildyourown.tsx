"use client";
import './home-buildyourown.css';
import React from 'react';
import Link from 'next/link'; 

const BYOAppSection: React.FC = () => {
  return (
    <div className="byo-app-section-container">
      <h1>Build Your Own App Section</h1>
      <p>This is placeholder content for the Build Your Own App section.</p>

      {/* Button linking to another page */}
      <Link href="/000008/app"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to App Page
        </button>
      </Link>
    </div>
  );
};

export default BYOAppSection;