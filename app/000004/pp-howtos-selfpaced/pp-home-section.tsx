"use client";
import './pp-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const SelfPacedPersonalHowTosSection: React.FC = () => {
  return (
    <div className="selfpaced-personalhowtos-section-container">
      <h1>Self Paced Courses Section</h1>
      <p>This is placeholder content for the Self Paced Courses section.</p>

      {/* Button linking to another page */}
      <Link href="/000015/p-selfpaced"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Self Paced Courses Page
        </button>
      </Link>
    </div>
  );
};

export default SelfPacedPersonalHowTosSection;