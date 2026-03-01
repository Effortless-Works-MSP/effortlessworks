"use client";
import './home-selfpaced.css';
import React from 'react';
import Link from 'next/link'; 

const SelfPacedSection: React.FC = () => {
  return (
    <div className="selfpaced-section-container">
      <h1>Self Paced Business Courses Section</h1>
      <p>This is placeholder content for the Self Paced Business Courses section.</p>

      {/* Button linking to another page */}
      <Link href="/000011/b-selfpaced"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Self Paced Business Courses Page
        </button>
      </Link>
    </div>
  );
};

export default SelfPacedSection;