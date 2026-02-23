"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-1-0-biz-nav/navigation';
import Footer from '../../000000/0-2-footer/footer'
import Backoffice from '../../000003/b-home-backoffice/home-backoffice';
import ProjectManagement from '../../000003/b-home-projectmanagement/home-projectmanagement';
import HowTos from '../../000003/b-home-howtos/home-howtos';

export default function BusinessHome() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scroll");

  useEffect(() => {
    if (scrollTo) {
      // Wait a tick to ensure sections are rendered
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  }, [scrollTo]);

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