"use client";
import CustomCursor from "../../000000/0-0-cursor/page";
import Navigation from "../../000000/1-2-0-ind-nav/indv-nav";
import Footer from "../../000000/0-2-footer/footer";
import LifeTracker from "../../000004/p-home-lifetracker/home-lifetracker";
import PersonalTracker from "../../000004/p-home-personaltracker/home-personaltracker";
import PersonalProjects from "../../000004/p-home-personalprojects/home-personalprojects";
import HowTos from "../../000004/p-home-howtos/home-howtos";

export default function BusinessHome() {

  return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="lifetracker">
        <LifeTracker />
      </div>

      <div id="personaltracker">
        <PersonalTracker />
      </div>

      <div id="personalprojects">
        <PersonalProjects />
      </div>

      <div id="howtos">
        <HowTos />
      </div>

      <Footer />
    </div>
  );
}