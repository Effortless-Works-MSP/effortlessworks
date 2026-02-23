"use client";
import './main.css';
import React from 'react';
import Link from 'next/link'; // <-- Import Link

const MainHome: React.FC = () => {
  return (
    <div className="main-section-container">
      <h1>Main Home Section</h1>
      <p>This is placeholder content for the Main Home section.</p>

      {/* Button linking to another page */}
      <Link href="/"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes no where yet
        </button>
      </Link>
    </div>
  );
};

export default MainHome;