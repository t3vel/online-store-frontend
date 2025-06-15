import { useState } from 'react';
import styles from './CatalogSidebar.module.css';

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
    </aside>
  );
}
