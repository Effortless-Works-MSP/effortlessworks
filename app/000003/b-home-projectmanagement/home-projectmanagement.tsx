"use client";
import './home-projectmanagement.css';
import React from 'react';
import Link from 'next/link'; 

const ProjectManagementSection: React.FC = () => {
  return (
    <div className="projectmanagement-section-container">
      <h1>Project Management Section</h1>
      <p>This is placeholder content for the Project Management section.</p>

      {/* Button linking to another page */}
      <Link href="/000003/projectmanagement"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Project Management Page
        </button>
      </Link>
    </div>
  );
};

export default ProjectManagementSection;