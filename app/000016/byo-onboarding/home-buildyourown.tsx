"use client";
import './home-buildyourown.css';
import React from 'react';
import Link from 'next/link'; 

const BYOOnboardingSection: React.FC = () => {
  return (
    <div className="byo-onboarding-section-container">
      <h1>Build Your Own Onboarding Section</h1>
      <p>This is placeholder content for the Build Your Own Onboarding section.</p>

      {/* Button linking to another page */}
      <Link href="/000008/onboarding"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Onboarding Page
        </button>
      </Link>
    </div>
  );
};

export default BYOOnboardingSection;