import Button from '@components/common/button/Button';
import { useEffect, useState } from 'react';
import styles from './Banner.module.css';

const bannerTexts = [
  {
    title1: 'Taste Nature.',
    title2: 'Choose Organic.',
    title3: 'Feel the Difference',
    buttonText: 'Show More',
  },
  {
    title1: 'Discover Health.',
    title2: 'Live Better.',
    title3: 'With Eco Products',
    buttonText: 'Show More',
  },
  {
    title1: 'Discover Health.',
    title2: 'Live Better.',
    title3: 'With Eco Products',
    buttonText: 'Show More',
  },
  {
    title1: 'Discover Health.',
    title2: 'Live Better.',
    title3: 'With Eco Products',
    buttonText: 'Show More',
  },
  {
    title1: 'Discover Health.',
    title2: 'Live Better.',
    title3: 'With Eco Products',
    buttonText: 'Show More',
  },
];

export default function Banner({ className = '' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % bannerTexts.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className={`${styles.banner} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.container}>
        {bannerTexts.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              currentSlide === index ? styles.slideActive : ''
            }`}
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
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
