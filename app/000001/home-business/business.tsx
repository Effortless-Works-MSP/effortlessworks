// Business.tsx
"use client";
import './business.css';
import React from 'react';
import Link from 'next/link';

const Business: React.FC = () => {
  return (
    <div className="business-section-container">
      <h1>Business Section</h1>
      <p>This is placeholder content for the Business section.</p>
    {/* Button linking to another page */}
      <Link href="/000002/business"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Business Page
        </button>
      </Link>
    </div>
  );
};

export default Business;