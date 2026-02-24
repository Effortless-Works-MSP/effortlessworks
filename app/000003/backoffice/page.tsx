"use client";
import CustomCursor from "../../000000/0-0-cursor/page";
import Navigation from "../../000000/1-1-2-0-backoffice-nav/backoffice";
import Footer from "../../000000/0-2-footer/footer";
import SheetsBackoffice from "../../000003/bb-backoffice-sheets/bb-home-section";
import NotionBackOffice from "../../000003/bb-backoffice-notion/bb-home-section";

export default function BackOfficeHome() {

  return (
    <div className="home-container">
      <CustomCursor />
      <Navigation />

      <div id="SheetsBackOfficeSection">
        <SheetsBackoffice />
      </div>

      <div id="NotionBackOfficeSection">
        <NotionBackOffice />
      </div>

      <Footer />
    </div>
  );
}