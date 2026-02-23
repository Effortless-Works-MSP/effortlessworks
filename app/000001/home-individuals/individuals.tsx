// Individuals.tsx
"use client";
import './individuals.css';
import React from 'react';
import Link from 'next/link';

const Individuals: React.FC = () => {
  return (
    <div className="individuals-section-container">
      <h1>Individuals Section</h1>
      <p>This is placeholder content for the Individuals section.</p>
    {/* Button linking to another page */}
      <Link href="/000002/individual"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Go to Individuals Page
        </button>
      </Link>
    </div>
  );
};

export default Individuals;