import React, { useEffect } from 'react';
import './quest.css';
import Image from 'next/image';

type UnderConstructionProps = {
  onClick?: () => void;
};

const UnderConstruction: React.FC<UnderConstructionProps> = ({ onClick }) => {
  const getRandomDuration = () => `${Math.random() * 2 + 2}s`; // Random duration between 2 and 4 seconds
  const getRandomRotation = () => (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 10 + 5); // Random rotation from -15deg to 15deg

  const foregroundGrassBlades = Array.from({ length: 200 }, (_, index) => (
    <div
      className="not-grass"
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
      className="not-grass-background"
      key={`background-${index}`}
      style={{
        animationDuration: getRandomDuration(),
        animationName: 'swayBackground',
        transform: `rotate(${getRandomRotation()}deg)`,
      }}
    ></div>
  ));

  useEffect(() => {
    const swords = document.querySelectorAll('.not-sword');
    const resetAnimations = () => {
      swords.forEach((sword) => {
        const swordElement = sword as HTMLElement;
        swordElement.classList.remove('not-sword');
        void swordElement.offsetWidth;
        swordElement.classList.add('not-sword');
      });
    };

    const intervalId = setInterval(resetAnimations, 20 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="not-floating-card cursor-pointer"
      onClick={onClick}
      title="Go to Effortless Quest"
    >
      <div className="not-construction-container">
        <div className="not-grass-background-container">{backgroundGrassBlades}</div>
        <div className="not-grass-container">{foregroundGrassBlades}</div>
        <div className="not-swords-container">
          <Image className="not-sword not-sword1" src="/swords/sword1.svg" alt="Sword 1" width={100} height={100} />
          <Image className="not-sword not-sword2" src="/swords/sword2.svg" alt="Sword 2" width={100} height={100} />
          <Image className="not-sword not-sword3" src="/swords/sword3.svg" alt="Sword 3" width={100} height={100} />
          <Image className="not-sword not-sword4" src="/swords/sword4.svg" alt="Sword 4" width={100} height={100} />
        </div>
        <div className="not-grass-base"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;