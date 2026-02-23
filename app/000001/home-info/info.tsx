// info.tsx
"use client";
import './info.css';
import React from 'react';
import Link from 'next/link';

const Info: React.FC = () => {
  return (
    <div className="info-section-container">
      <h1>Info Section</h1>
      <p>This is placeholder content for the Info section.</p>
    {/* Button linking to another page */}
      <Link href="/000002/info"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Go to Info Page
        </button>
      </Link>
    </div>
    
  );
};

export default Info;