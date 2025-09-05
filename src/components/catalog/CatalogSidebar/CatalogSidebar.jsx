import { useState } from 'react';
import styles from './CatalogSidebar.module.css';
import PriceRange from '../PriceRange/PriceRange';
import PopularBrands from '@components/catalog/PopularBrands/PopularBrands';

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

export default function CatalogSidebar({
  selectedBrands = [],
  onBrandsChange,
  selectedCategory,
  onCategoryChange,
  priceFrom,
  priceTo,
  onPriceChange,
}) {
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
          <div key={category} className={styles.category}>
            <label className={styles.checkboxLabel}>
              <input
                type="radio"
                name="catalog-category"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange && onCategoryChange(category)}
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
      <PriceRange min={priceFrom} max={priceTo} onChange={onPriceChange} />
      <PopularBrands selectedBrands={selectedBrands} onChange={onBrandsChange} />
    </aside>
  );
}
