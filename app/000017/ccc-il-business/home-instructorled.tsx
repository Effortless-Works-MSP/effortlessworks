"use client";
import './home-instructorled.css';
import React from 'react';
import Link from 'next/link'; 

const InstructorLedSection: React.FC = () => {
  return (
    <div className="instructorled-section-container">
      <h1>Instructor Led Business Courses Section</h1>
      <p>This is placeholder content for the Instructor Led Business Courses section.</p>

      {/* Button linking to another page */}
      <Link href="/000011/b-instructorled"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Instructor Led Business Courses Page
        </button>
      </Link>
    </div>
  );
};

export default InstructorLedSection;