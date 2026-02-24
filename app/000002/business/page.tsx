"use client";import { useEffect } from "react";
import CustomCursor from "../../000000/0-0-cursor/page";
import Navigation from "../../000000/1-1-0-biz-nav/biz-nav";
import Footer from "../../000000/0-2-footer/footer";
import Backoffice from "../../000003/b-home-backoffice/home-backoffice";
import ProjectManagement from "../../000003/b-home-projectmanagement/home-projectmanagement";
import HowTos from "../../000003/b-home-howtos/home-howtos";

export default function BusinessHome() {
  useEffect(() => {
    // Check if the page has already reloaded
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true"); // Set flag
      window.location.reload(); // Reload page
    }
  }, []);

  return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="backoffice">
        <Backoffice />
      </div>

      <div id="projectmanagement">
        <ProjectManagement />
      </div>

      <div id="howtos">
        <HowTos />
      </div>

      <Footer />
    </div>
  );
}