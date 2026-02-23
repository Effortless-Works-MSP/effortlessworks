// contact.tsx
"use client";
import './contact.css';
import React from 'react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div className="contact-section-container">
      <h1>Contact Section</h1>
      <p>This is placeholder content for the Contact section.</p>
     {/* Button linking to another page */}
      <Link href="/000002/contact"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Go to Contact Page
        </button>
      </Link>
    </div>
  );
};

export default Contact;