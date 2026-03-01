import React, { useEffect } from 'react';
import './UnderConstruction.css';
import Image from 'next/image';

const UnderConstruction: React.FC = () => {
  const getRandomDuration = () => `${Math.random() * 2 + 2}s`; // Random duration between 2 and 4 seconds
  const getRandomRotation = () => (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 10 + 5); // Random rotation from -15deg to 15deg

  const foregroundGrassBlades = Array.from({ length: 200 }, (_, index) => (
    <div
      className="quest-grass"
      key={`foreground-${index}`}
      style={{
        animationDuration: getRandomDuration(),
        animationName: 'sway',
        transform: `rotate(${getRandomRotation()}deg)`,
      }}
    ></div>
  ));

  const backgroundGrassBlades = Array.from({ length: 200 }, (_, index) => (
    <div
      className="quest-grass-background"
      key={`background-${index}`}
      style={{
        animationDuration: getRandomDuration(),
        animationName: 'swayBackground',
        transform: `rotate(${getRandomRotation()}deg)`,
      }}
    ></div>
  ));

  useEffect(() => {
    const swords = document.querySelectorAll('.sword');
    const resetAnimations = () => {
      swords.forEach((sword) => {
        // Cast sword as HTMLElement to access offsetWidth
        const swordElement = sword as HTMLElement;
        swordElement.classList.remove('quest-sword'); // Remove class to reset animation
        void swordElement.offsetWidth; // Trigger reflow
        swordElement.classList.add('quest-sword'); // Add the class back to restart the animation
      });
    };

    // Set interval to reset animations after a complete cycle (20s for the 4 swords)
    const intervalId = setInterval(resetAnimations, 20 * 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="quest-floating-card">
  
      <div className="quest-construction-container">
        <div className="quest-grass-background-container">
          {backgroundGrassBlades}
        </div>
        <div className="quest-grass-container">
          {foregroundGrassBlades}
        </div>
        <div className="quest-swords-container">
          <Image className="quest-sword quest-sword1" src="/swords/sword1.svg" alt="Sword 1" width={100} height={100} />
          <Image className="quest-sword quest-sword2" src="/swords/sword2.svg" alt="Sword 2" width={100} height={100} />
          <Image className="quest-sword quest-sword3" src="/swords/sword3.svg" alt="Sword 3" width={100} height={100} />
          <Image className="quest-sword quest-sword4" src="/swords/sword4.svg" alt="Sword 4" width={100} height={100} />
        </div>
        <div className="quest-grass-base"></div> {/* Dark green base at the bottom */}
      </div>
    </div>
  );
};

export default UnderConstruction;
