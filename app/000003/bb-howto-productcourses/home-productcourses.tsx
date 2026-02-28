"use client";
import './home-productcourses.css';
import React from 'react';
import Link from 'next/link'; 

const ProductCoursesSection: React.FC = () => {
  return (
    <div className="productcourses-section-container">
      <h1>Product Courses Section</h1>
      <p>This is placeholder content for the Product Courses section.</p>

      {/* Button linking to another page */}
      <Link href="/000011/b-productcourses"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Product Courses Page
        </button>
      </Link>
    </div>
  );
};

export default ProductCoursesSection;