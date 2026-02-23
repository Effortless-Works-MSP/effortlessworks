// quest.tsx
"use client";
import './quest.css';
import React from 'react';
import Link from 'next/link';

const Quest: React.FC = () => {
  return (
    <div className="quest-section-container">
      <h1>Quest Section</h1>
      <p>This is placeholder content for the Quest section.</p>
      {/* Button linking to another page */}
      <Link href="/000002/quest"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Go to Quest Page
        </button>
      </Link>
    </div>
  );
};

export default Quest;