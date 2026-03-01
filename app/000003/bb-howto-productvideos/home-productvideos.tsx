"use client";
import './home-productvideos.css';
import React from 'react';
import Link from 'next/link'; 

const ProductVideosSection: React.FC = () => {
  return (
    <div className="productvideos-section-container">
      <h1>Product Videos Section</h1>
      <p>This is placeholder content for the Product Videos section.</p>

      {/* Button linking to another page */}
      <Link href="/000011/b-productvideos"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Product Videos Page
        </button>
      </Link>
    </div>
  );
};

export default ProductVideosSection;