import { useEffect, useState, useRef } from 'react';
import styles from './Banner.module.css';
import Button from '@components/common/Button/Button';

import bannerBackground1 from '@assets/images/banner_background_1.png';
import bannerBackground2 from '@assets/images/banner_background_2.png';
import bannerBackground3 from '@assets/images/banner_background_3.png';
import bannerBackground4 from '@assets/images/banner_background_4.png';
import bannerBackground5 from '@assets/images/banner_background_5.png';
import bannerBackground6 from '@assets/images/banner_background_6.png';

import bannerBackground1Webp from '@assets/images/optimized/banner_background_1.webp';
import bannerBackground2Webp from '@assets/images/optimized/banner_background_2.webp';
import bannerBackground3Webp from '@assets/images/optimized/banner_background_3.webp';
import bannerBackground4Webp from '@assets/images/optimized/banner_background_4.webp';
import bannerBackground5Webp from '@assets/images/optimized/banner_background_5.webp';
import bannerBackground6Webp from '@assets/images/optimized/banner_background_6.webp';

const bannerTexts = [
  {
    title1: 'Feel the Difference.',
    title2: 'Eat Clean.',
    title3: 'Discover organic essentials that support your healthy lifestyle.',
    buttonText: 'Show More',
    background: bannerBackground1,
    backgroundWebp: bannerBackground1Webp,
  },
  {
    title1: 'Taste Nature.',
    title2: 'Choose Organic.',
    title3: 'Browse our healthy food catalog sorted by goals and categories.',
    buttonText: 'Show More',
    background: bannerBackground2,
    backgroundWebp: bannerBackground2Webp,
  },
  {
    title1: 'Stay Informed.',
    title2: 'Stay Inspired.',
    title3: 'Read the latest healthy living news and nutrition advice.',
    buttonText: 'Show More',
    background: bannerBackground3,
    backgroundWebp: bannerBackground3Webp,
  },
  {
    title1: 'Live Balanced.',
    title2: 'Track Your Health.',
    title3: 'Instantly calculate your BMI and explore foods that match your needs.',
    buttonText: 'Show More',
    background: bannerBackground4,
    backgroundWebp: bannerBackground4Webp,
  },
  {
    title1: 'Nature\'s Best,',
    title2: 'Delivered to You.',
    title3: 'From fresh produce to mindful snacks — explore our organic selection.',
    buttonText: 'Show More',
    background: bannerBackground5,
    backgroundWebp: bannerBackground5Webp,
  },
  {
    title1: 'Smart Eating',
    title2: 'Starts Here.',
    title3: 'Try our BMI calculator and get food tips that really work.',
    buttonText: 'Show More',
    background: bannerBackground6,
    backgroundWebp: bannerBackground6Webp,
  },
];

export default function Banner({ className = '' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerTexts.length);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  //Handle slide progression
  useEffect(() => {
    if (!isHovered) {
      startInterval();
    } else {
      stopInterval();
    }

    return () => stopInterval();
  }, [isHovered]);

  // Handle manual slide changes
  const handleDotClick = (index) => {
    setCurrentSlide(index);
    if (!isHovered) {
      startInterval();
    }
  };

  return (
    <section
      className={`${styles.banner} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className={styles.backgroundImage}>
        <img
          key={currentSlide}
          src={bannerTexts[currentSlide].background}
          alt={`Banner background ${currentSlide + 1}`}
          className={styles.bgImage}
        />
      </div>
      
      <div className={styles.container}>
        {bannerTexts.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              currentSlide === index ? styles.slideActive : ''
            }`}
            data-slide-index={index}
          >
            <div className={styles.content}>
              <p className={styles.title}>
                <span>{slide.title1}</span>
                <span>{slide.title2}</span>
                <span>{slide.title3}</span>
              </p>
              <Button>{slide.buttonText}</Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.dots}>
        {bannerTexts.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.active : ''
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
