"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-5-1-1-productvideo/navigation';
import Footer from '../../000000/0-2-footer/footer'
import ProductVideoBusiness from "../../000017/ccc-pv-business/home-productvideos";
import ProductVideoIndividual from "../../000017/ccc-pv-individual/home-productvideos";

export default function Home() {

    return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="Business">
        <ProductVideoBusiness />
      </div>

      <div id="Individual">
        <ProductVideoIndividual />
      </div>

      <Footer />
    </div>
  );
}