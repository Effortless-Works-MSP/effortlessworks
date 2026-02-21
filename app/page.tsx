"use client";

import Navigation from './000000/0-1-navigation/navigation';
import Footer from './000000/0-2-footer/footer';
import CustomCursor from './000000/0-0-cursor/page';
import Head from 'next/head';

// Import your section components
import MainHome from './000001/home-main/main';
import Business from './000001/home-business/business';
import Individuals from './000001/home-individuals/individuals';
import BuildYourOwn from './000001/home-buildyourown/buildyourown';
import Quest from './000001/home-quest/quest';
import Courses from './000001/home-courses/courses';
import Info from './000001/home-info/info';
import Contact from './000001/home-contact/contact';

import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Fonts */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navigation />

      {/* Sections */}
      <section id="mainhome">
        <MainHome />
      </section>

      <section id="business">
        <Business />
      </section>

      <section id="individual">
        <Individuals />
      </section>

      <section id="buildyourown">
        <BuildYourOwn />
      </section>

      <section id="quest">
        <Quest />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="info">
        <Info />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}