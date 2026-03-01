"use client";

import React from "react";
import "./footer.css";
import QuestFooter from "../0-6-QuestConstruction/UnderConstruction";

const Footer: React.FC = () => {
  return (
    <section className="footer-card-container">
      <div className="footer h-70 py-8 rounded-lg shadow-lg">
        <div className="container mx-auto px-8">
          {/* Define a grid with 4 columns */}
          <div className="grid grid-cols-4 gap-8 mt-[-10px]">
            
            {/* Column 1 - Effortless Business Management Cards */}
            <div className="footer-column-wrapper">
              <div className="footer-column-wrapper-card p-6 shadow-md rounded-md">
                <div className="footer-column">
                  <img 
                    src="/nav-titles/biz-nav.svg" 
                    alt="Effortless Business Management" 
                    className="w-[300px] h-auto mb-5 mx-auto"
                  />
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Services</h1>
                    <a href="/000008/website" className="footer-link">Website Builder</a>
                    <a href="/000008/app" className="footer-link">App Builder</a>
                    <a href="/000008/onboarding" className="footer-link">Onboarding Builder</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Back Office</h1>
                    <a href="/000009/bo-sheets" className="footer-link">Google Sheets</a>
                    <a href="/000009/bo-notion" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Project Management</h1>
                    <a href="/000010/pm-sheets" className="footer-link">Google Sheets</a>
                    <a href="/000010/pm-notion" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">How Tos</h1>
                    <a href="/000011/b-productvideos" className="footer-link">Product Videos</a>
                    <a href="/000011/b-selfpaced" className="footer-link">Self Paced Courses</a>
                    <a href="/000011/b-instructorled" className="footer-link">Instructor Led Courses</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Effortless Personal Life Cards */}
            <div className="footer-column-wrapper">
              <div className="footer-column-wrapper-card p-6 shadow-md rounded-md">
                <div className="footer-column">
                  <img 
                    src="/nav-titles/indv-nav.svg" 
                    alt="Effortless Personal Life" 
                    className="w-[300px] h-auto mb-5 mx-auto"
                  />
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Life Tracker</h1>
                    <a href="/000012/lt-sheets" className="footer-link">Google Sheets</a>
                    <a href="/000012/lt-notion" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Personal Trackers</h1>
                    <a href="/000013/pt-sheets" className="footer-link">Google Sheets</a>
                    <a href="/000013/pt-notion" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Personal Projects</h1>
                    <a href="/000014/pp-sheets" className="footer-link">Google Sheets</a>
                    <a href="/000014/pp-notion" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">How Tos</h1>
                    <a href="/000015/p-productvideos" className="footer-link">Product Videos</a>
                    <a href="/000015/p-selfpaced" className="footer-link">Self Paced Courses</a>
                    <a href="/000015/p-instructorled" className="footer-link">Instructor Led Courses</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 - Effortless Quest */}
            <div className="footer-column-wrapper">
              <div className="footer-column-wrapper-card p-6 shadow-md rounded-md">
                <div className="footer-column">
                  <img 
                    src="/nav-titles/quest-nav.svg" 
                    alt="Effortless Quest" 
                    className="w-[300px] h-auto mb-5 mx-auto"
                  />
                  <div className="footer-card effortless-quest-card p-6 shadow-md rounded-md text-center">
                    <div>
                      <h1 className="text-2xl font-bold mb-6">Effortless Quest</h1>
                      <a href="/000005/about" className="footer-link">About</a>
                      <a href="/000005/howtoplay" className="footer-link">How To Play</a>
                      <a href="/000005/roadmap" className="footer-link">Road Map</a>
                    </div>
                    <QuestFooter />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 - Muslim Success Path Cards */}
            <div className="footer-column-wrapper">
              <div className="footer-column-wrapper-card p-6 shadow-md rounded-md">
                <div className="footer-column">
                  <img 
                    src="/Website-Logo/MuslimSuccessPath-White.svg" 
                    alt="Muslim Success Path Logo" 
                    className="w-[400px] h-auto mb-5 mx-auto"
                  />
                  
                  <div className="footer-card title-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Muslim Success Path</h1>
                    <a href="https://www.muslimsuccesspath.com/2/about" className="footer-link" target="_blank" rel="noopener noreferrer">About Us</a>
                    <a href="https://www.muslimsuccesspath.com/2/videos" className="footer-link" target="_blank" rel="noopener noreferrer">Videos</a>
                    <a href="https://www.muslimsuccesspath.com/2/podcast" className="footer-link" target="_blank" rel="noopener noreferrer">Podcast</a>
                    <a href="https://www.muslimsuccesspath.com/2/apps" className="footer-link" target="_blank" rel="noopener noreferrer">Apps</a>
                    <a href="https://www.muslimsuccesspath.com/2/books" className="footer-link" target="_blank" rel="noopener noreferrer">Books</a>
                    <a href="https://www.muslimsuccesspath.com/3" className="footer-link" target="_blank" rel="noopener noreferrer">Road Map</a>
                    <a href="https://www.muslimsuccesspath.com/2/newsletter" className="footer-link" target="_blank" rel="noopener noreferrer">Newsletter</a>
                  </div>

                  
                  <div className="footer-card title-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold mb-6">Socials</h1>
                    <a href="https://www.instagram.com/muslim.success.path" target="_blank" rel="noopener noreferrer">
                      <img src="/social-media-logos/instagram.svg" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.tiktok.com/@muslim.success.path" target="_blank" rel="noopener noreferrer">
                      <img src="/social-media-logos/tiktok.svg" alt="TikTok" className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@MuslimSuccessPath" target="_blank" rel="noopener noreferrer">
                      <img src="/social-media-logos/youtube.svg" alt="YouTube" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/muslim-success-path/about" target="_blank" rel="noopener noreferrer">
                      <img src="/social-media-logos/linkedin.svg" alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://x.com/muslimsuccess_" target="_blank" rel="noopener noreferrer">
                      <img src="/social-media-logos/twitter.svg" alt="Twitter" className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom of Footer */}
          <div className="footer-links mt-8">
            <a href="/4/privacy" className="footer-link">Privacy Policy</a>
            <a href="/4/terms" className="footer-link">Terms of Service</a>
            <a href="/4/return" className="footer-link">Return Policy</a>
            <a href="/4/cookies" className="footer-link">Cookie Policy</a>
            <a href="/4/disclaimer" className="footer-link">Disclaimer</a>
          </div>

          <div className="text-center mt-4 footer-copyright">
            <p>&copy; 2024 Elif Çakmak, EasyFlow Media, Effortless Works, Effortless Quest. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
