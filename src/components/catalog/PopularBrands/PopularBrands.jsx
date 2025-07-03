import React, { useState } from 'react';
import styles from './PopularBrands.module.css';

const BRANDS = [
  'Alnatura',
  'Voelkel',
  'LaSelva',
  'Naturata',
  'Bio vom Berg',
  'Landgarten',
  'Clearspring',
  'Biona',
  'Isola Bio',
  'Bjorg',
  'Probios',
  'Dennree',
  'TerraSanа',
];

const PopularBrands = () => {
  const [selectedBrands, setSelectedBrands] = useState([
    'Alnatura',
    'Voelkel',
    'Landgarten',
    'Biona',
    'Bjorg',
    'Dennree',
  ]);
  const [isOpen, setIsOpen] = useState(true);

  const toggleBrand = (brand) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((b) => b !== brand)
        : [...prevSelected, brand]
    );
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h4 className={styles.title}>Popular Brands</h4>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          onClick={toggleOpen}
        >
          <path
            d="M15.8346 12.916L10.0013 7.08268L4.16797 12.916"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {BRANDS.map((brand) => (
            <li key={brand} className={styles.item}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className={styles.checkbox}
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopularBrands;
