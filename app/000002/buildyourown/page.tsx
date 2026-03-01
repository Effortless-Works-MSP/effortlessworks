"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-3-1-0-buildyourown-nav/byo-nav';
import Footer from '../../000000/0-2-footer/footer'
import Website from "../../000016/byo-website/home-buildyourown";
import App from "../../000016/byo-app/home-buildyourown"; // Import the new component
import OnboardingCourse from "../../000016/byo-onboarding/home-buildyourown"; // Import the new component
import SheetsSystem from "../../000016/byo-sheets/home-buildyourown"; // Import the new component
import NotionSystem from "../../000016/byo-notion/home-buildyourown";

export default function BusinessHome() {

  return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="website">
        <Website />
      </div>

      <div id="app">
        <App />
      </div>

      <div id="onboardingcourse">
        <OnboardingCourse />
      </div>

       <div id="sheetssystem">
        <SheetsSystem />
      </div>

       <div id="notionsystem">
        <NotionSystem />
      </div>

      <Footer />
    </div>
  );
}