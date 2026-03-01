"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-2-2-0-personaltracker-nav/pers-nav';
import Footer from '../../000000/0-2-footer/footer'
import UnderConstruction from '../../000000/0-4-UnderConstruction/UnderConstruction'; // Import the new component

export default function PersonalTrackerHome() {

  return (
    <div className="home-container">
      {/* Import Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* UnderConstruction */}
      <UnderConstruction />

      {/* Footer */}
      <Footer />
    </div>
  );
}