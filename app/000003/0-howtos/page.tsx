"use client";
import CustomCursor from "../../000000/0-0-cursor/page";
import Navigation from "../../000000/1-1-4-0-b-howtos-nav/howto-nav";
import Footer from "../../000000/0-2-footer/footer";
import ProductCourses from "../../000003/bb-howto-productcourses/home-productcourses";
import SelfPacedCourses from "../../000003/bb-howto-selfpacedcourses/home-selfpaced";
import InstructorledCourses from "../../000003/bb-howto-instructorledcourses/home-instructorled";

export default function BusinessHowTosHome() {

  return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="productcourses">
        <ProductCourses />
      </div>

      <div id="selfpacedcourses">
        <SelfPacedCourses />
      </div>

      <div id="instructorledcourses">
        <InstructorledCourses />
      </div>

      <Footer />
    </div>
  );
}