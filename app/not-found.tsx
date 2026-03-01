"use client";

import CustomCursor from './000000/0-0-cursor/page';
import Navigation from './000000/1-8-0-contact/navigation';
import Footer from './000000/0-2-footer/footer';
import UnderConstruction from './000000/0-4-UnderConstruction/UnderConstruction';

export default function Home() {
  return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <h1
        style={{
          textAlign: "center",
          fontSize: "80px",
          marginTop: "100px",
          color: "black"
        }}
      >
        404
      </h1>

      <UnderConstruction />
      <Footer />
    </div>
  );
}