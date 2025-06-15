import Slider from 'react-slick';
import styles from './CatalogCategories.module.css';
import {
  NextArrow,
  PrevArrow,
} from '@components/utils/SliderArrow/SliderArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { name: 'Fruits', image: '/images/categories/fruits.jpg' },
  { name: 'Vegetables', image: '/images/categories/vegetables.jpg' },
  { name: 'Meat', image: '/images/categories/meat.jpg' },
  { name: 'Fish', image: '/images/categories/fish.jpg' },
  { name: 'Desserts', image: '/images/categories/desserts.jpg' },
  { name: 'Drinks', image: '/images/categories/drinks.jpg' },
  { name: 'Groceries', image: '/images/categories/groceries.jpg' },
  { name: 'Groceries', image: '/images/categories/groceries.jpg' },
  { name: 'Groceries', image: '/images/categories/groceries.jpg' },
];

export default function CatalogCategories() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.name} className={styles.slide}>
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className={styles.overlay}>
                <span className={styles.label}>{category.name}</span>
              </div>
            </div>
          </div> 
        ))}
      </Slider>
    </div>
  );
}
