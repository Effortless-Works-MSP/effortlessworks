// courses.tsx
"use client";
import './courses.css';
import React from 'react';
import Link from 'next/link';

const Courses: React.FC = () => {
  return (
    <div className="courses-section-container">
      <h1>Courses Section</h1>
      <p>This is placeholder content for the Courses section.</p>
    {/* Button linking to another page */}
      <Link href="/000002/courses"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Go to Courses Page
        </button>
      </Link>
    </div>
  );
};

export default Courses;