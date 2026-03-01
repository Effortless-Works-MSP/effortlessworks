"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-2-3-0-personalprojects-nav/perproj-nav';
import Footer from '../../000000/0-2-footer/footer'
import SheetsPersonalProjects from "../../000004/pp-personalprojects-sheets/pp-home-section";
import NotionPersonalprojects from "../../000004/pp-personalprojects-notion/pp-home-section";

export default function PersonalProjectsHome() {

  return (
    <div className="home-container">
      {/* Import Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      <div id="SheetsPersonalProjectsSection">
        <SheetsPersonalProjects />
      </div>

      <div id="NotionPersonalProjectsSection">
        <NotionPersonalprojects />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}