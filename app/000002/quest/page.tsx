"use client"; // Add this directive to make this a client component

import CustomCursor from '../../000000/0-0-cursor/page';
import Navigation from '../../000000/1-4-1-0-quest-nav/quest-nav';
import Footer from '../../000000/0-2-footer/footer'
import QuestConstruction from '../../000000/0-5-QuestConstruction/UnderConstruction'; // Import the new component
import './quest.css';

export default function Home() {

  return (
    <div className="home-container">
      {/* Import Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />
            
      {/* UnderConstruction */}
      <QuestConstruction />

      {/* Image and Speech side by side */}
      <div className="quest-container">
        <img className="quest-image" src="/nav-titles/quest-nav.svg" alt="Effortless Quest Logo" width={300} height={300} />
        <div className="quest-speech">
          {/* Your text content here */}
          Gamify Your Tasks Effortlessly!
          <div className="image-container">
            <img className="sword-image" src="/swords/sword3.svg" alt="Effortless Quest Logo" width={200} height={300} />
            
            {/* Bug Button */}
            <a href="https://www.effortless.quest/" className="bug-button">
              Play Now
            </a>
            
            <img className="sword-image2" src="/swords/sword3.svg" alt="Effortless Quest Logo" width={200} height={300} />
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}