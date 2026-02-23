// BuildYourOwn.tsx
"use client";
import './buildyourown.css';
import React from 'react';
import Link from 'next/link';

const BuildYourOwn: React.FC = () => {
  return (
    <div className="buildyourown-section-container">
      <h1>Build Your Own Section</h1>
      <p>This is placeholder content for the Build Your Own section.</p>
    {/* Button linking to another page */}
      <Link href="/000002/buildyourown"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Go to Build Your Own Page
        </button>
      </Link>
    </div>
  );
};

export default BuildYourOwn;