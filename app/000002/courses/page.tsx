"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-5-1-0-course-nav/navigation';
import Footer from '../../000000/0-2-footer/footer'
import ProductVideos from "../../000017/cc-home-productvideos/home-productvideos";
import SelfPacedCourses from "../../000017/cc-home-selfpaced/home-selfpaced";
import InstructorledCourses from "../../000017/cc-home-instructorled/home-instructorled";

export default function BusinessHowTosHome() {

  return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="productvideos">
        <ProductVideos />
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