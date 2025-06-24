import { useState } from 'react';
import styles from './CatalogSidebar.module.css';
import PriceRange from '../PriceRange/PriceRange';

const categories = [
  'Fruits & Vegetables',
  'High Protein',
  'Whole grains',
  'Milk products',
  'Low fat products',
  'Pre-Meats',
  'Nuts & paste',
  'Snacks',
  'Oils',
  'Desserts',
  'Pre-cooked meals',
  'Diets',
  'Accessories',
];

export default function CatalogSidebar() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Category</h3>
      <div className={styles.section}>
        {categories.map((category) => (
          <div className={styles.category}>
            <label key={category} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(category)}
                onChange={() => handleCheckboxChange(category)}
                className={styles.categoryInput}
              />
              <span className={styles.categoryText}>{category}</span>
            </label>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.91536 4.95898L6.9987 9.04232L11.082 4.95898"
                stroke="#4D4D4D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
      <PriceRange />
    </aside>
  );
}
