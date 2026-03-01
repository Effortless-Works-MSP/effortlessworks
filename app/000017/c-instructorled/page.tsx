"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-5-1-3-instructorled/navigation';
import Footer from '../../000000/0-2-footer/footer'
import InsturctorLedBusiness from "../../000017/ccc-il-business/home-instructorled";
import InstrutorLedIndividual from "../../000017/ccc-il-individual/home-instructorled";

export default function Home() {

   return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="Business">
        <InsturctorLedBusiness />
      </div>

      <div id="Individual">
        <InstrutorLedIndividual />
      </div>

      <Footer />
    </div>
  );
}