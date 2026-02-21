//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
"use client"; //makes this a client component

import Navigation from './000000/0-1-navigation/navigation';
import Footer from './000000/0-2-footer/footer'; // Import Footer
import CustomCursor from './000000/0-0-cursor/page'; // Cursor Import
import Head from 'next/head'; // Import for adding elements to the <head>
import './home.css';


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Home() {


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="home-container">
      
      {/* Add the font link */}
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Import Cursor */}
      <CustomCursor />
      
      {/* Import Navigation */}

      <Navigation />

      {/* Scroll Sections */}

      <section id="mainhome" className="scroll-section">
        <h1>Main Home Section</h1>
      </section>

      <section id="business" className="scroll-section">
        <h1>Business Section</h1>
      </section>

      <section id="individual" className="scroll-section">
        <h1>Individuals Section</h1>
      </section>

      <section id="buildyourown" className="scroll-section">
        <h1>Build Your Own Section</h1>
      </section>

      <section id="quest" className="scroll-section">
        <h1>Quest Section</h1>
      </section>

      <section id="courses" className="scroll-section">
        <h1>Courses Section</h1>
      </section>

      <section id="info" className="scroll-section">
        <h1>Info Section</h1>
      </section>

      <section id="contact" className="scroll-section">
        <h1>Contact Section</h1>
      </section>

      {/* Footer */}

      <Footer />


    </div>
  );
}
