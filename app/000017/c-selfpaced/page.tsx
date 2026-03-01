"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-5-1-2-selfpaced/navigation';
import Footer from '../../000000/0-2-footer/footer'
import SelfPacedBusiness from "../../000017/ccc-sp-business/home-selfpaced";
import SelfPacedIndividual from "../../000017/ccc-sp-individual/home-selfpaced";

export default function Home() {

   return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="Business">
        <SelfPacedBusiness />
      </div>

      <div id="Individual">
        <SelfPacedIndividual />
      </div>

      <Footer />
    </div>
  );
}