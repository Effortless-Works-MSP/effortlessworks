"use client";
import CustomCursor from "../../000000/0-0-cursor/page";
import Navigation from "../../000000/1-1-3-0-projectmanagement-nav/navigation";
import Footer from "../../000000/0-2-footer/footer";
import SheetsProjectManagement from "../bb-projectmanagement-sheets/bb-home-section";
import NotionProjectManagement from "../bb-projectmanagement-notion/bb-home-section";

export default function ProjectManagementHome() {

  return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="SheetsProjectManagementSection">
        <SheetsProjectManagement />
      </div>

      <div id="NotionProjectManagementSection">
        <NotionProjectManagement />
      </div>

      <Footer />
    </div>
  );
}