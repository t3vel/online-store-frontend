import { useState } from 'react';
import styles from './CatalogSidebar.module.css';

const categories = [
  'Vegetables',
  'Fruits',
  'Drinks',
  'Snacks',
  'Desserts',
  'Pre-cooked meals',
  'Diets',
  'Groceries',
  'Accessories',
];

const additionalOptions = ['Special Offers', 'Price', 'Brands'];

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
      <div className={styles.section}>
        {categories.map((category) => (
          <label key={category} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className={styles.categoryInput}
            />
            {category}
          </label>
        ))}
      </div>

      <div className={styles.section}>
        {additionalOptions.map((option) => (
          <label key={option} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className={styles.additionalInput}
            />
            {option}
          </label>
        ))}
      </div>
    </aside>
  );
}
