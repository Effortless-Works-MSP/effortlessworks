"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-2-2-0-personaltracker-nav/pers-nav';
import Footer from '../../000000/0-2-footer/footer'
import SheetsPersonalTracker from "../../000004/pp-personaltracker-sheets/pp-home-section";
import NotionPersonalTracker from "../../000004/pp-personaltracker-notion/pp-home-section";

export default function PersonalTrackerHome() {

  return (
    <div className="home-container">
      {/* Import Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      <div id="SheetsPersonalTrackerSection">
        <SheetsPersonalTracker />
      </div>

      <div id="NotionPersonalTrackerSection">
        <NotionPersonalTracker />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}