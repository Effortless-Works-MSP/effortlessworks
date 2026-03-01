"use client";
import './pp-home-section.css';
import React from 'react';
import Link from 'next/link'; 

const ProductPersonalHowTosSection: React.FC = () => {
  return (
    <div className="product-personalhowtos-section-container">
      <h1>Product Videos Section</h1>
      <p>This is placeholder content for the Product Videos section.</p>

      {/* Button linking to another page */}
      <Link href="/000015/p-productvideos"> {/* Replace '/target-page' with your page path */}
        <button className="link-button">
          Goes to Product Videos Page
        </button>
      </Link>
    </div>
  );
};

export default ProductPersonalHowTosSection;