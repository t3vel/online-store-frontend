import { useEffect, useState } from 'react';
import styles from './Banner.module.css';

import slide1 from '../../assets/images/bannerimages/slide1.jpg';
import slide2 from '../../assets/images/bannerimages/slide2.png';
import slide3 from '../../assets/images/bannerimages/slide3.png';

const slides = [
  {
    image: slide1,
    alt: 'Знижка -20% на все',
  },
  {
    image: slide2,
    alt: 'Безкоштовна доставка',
  },
  {
    image: slide3,
    alt: 'Новинки вже в наявності',
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToSlide = (index) => {
    const slidesElement = document.querySelector(`.${styles.slides}`);
    if (slidesElement) {
      slidesElement.style.transition =
        'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
      setCurrentSlide(index);
    }
  };

  return (
    <section
      className={styles.banner}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.slideContainer}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <img src={slide.image} alt={slide.alt} className={styles.image} />
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Слайд ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
