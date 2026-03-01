"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-2-4-0-p-howtos-nav/p-howtos';
import Footer from '../../000000/0-2-footer/footer'
import ProductPersonalHowTos from "../../000004/pp-howtos-productvideos/pp-home-section";
import SelfPacedPersonalHowTos from "../../000004/pp-howtos-selfpaced/pp-home-section";
import InstructorLedPersonalHowTos from "../../000004/pp-howtos-instructorled/pp-home-section";

export default function PersonalProjectsHome() {

  return (
    <div className="home-container">
      {/* Import Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      <div id="ProductPersonalHowTosSection">
        <ProductPersonalHowTos />
      </div>

      <div id="SelfPacedPersonalHowTosSection">
        <SelfPacedPersonalHowTos />
      </div>

      <div id="InstructorLedPersonalHowTosSection">
        <InstructorLedPersonalHowTos />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}