"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-2-1-0-lifetracker-nav/life-nav';
import Footer from '../../000000/0-2-footer/footer'
import SheetsLifeTracker from "../../000004/pp-lifetracker-sheets/pp-home-section";
import NotionLifeTracker from "../../000004/pp-lifetracker-notion/pp-home-section";

export default function LifeTrackerHome() {

  return (
    <div className="home-container">
      {/* Import Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      <div id="SheetsLifeTrackerSection">
        <SheetsLifeTracker />
      </div>

      <div id="NotionLifeTrackerSection">
        <NotionLifeTracker />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}