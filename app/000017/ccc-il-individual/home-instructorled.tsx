"use client";
import './home-instructorled.css';
import React from 'react';
import Link from 'next/link'; 

const InstructorLedSection: React.FC = () => {
  return (
    <div className="instructorled-section-container">
      <h1>Instructor Led Individual Courses Section</h1>
      <p>This is placeholder content for the Instructor Led Individual Courses section.</p>

      {/* Button linking to another page */}
      <Link href="/000015/p-instructorled"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Instructor Led Individual Courses Page
        </button>
      </Link>
    </div>
  );
};

export default InstructorLedSection;