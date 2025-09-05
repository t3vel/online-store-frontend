import React, { useEffect, useState } from 'react';
import styles from './PopularBrands.module.css';

const PopularBrands = ({ selectedBrands = [], onChange }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setErrorMessage('');
      try {
        const res = await fetch(`${API_URL}/api/v1/catalog/brand`, {
          method: 'GET',
          headers: { accept: 'application/json' },
          signal: controller.signal,
        });
        const contentType = res.headers.get('content-type') || '';
        let payload = null;
        try {
          if (contentType.includes('application/json')) {
            payload = await res.json();
          } else {
            const text = await res.text();
            payload = text ? { message: text } : null;
          }
        } catch (_) {
          payload = null;
        }
        if (!res.ok) {
          const msg = (payload && (payload.message || payload.error)) || `Request failed with status ${res.status}`;
          setErrorMessage(msg);
          setBrands([]);
          return;
        }
        const items = Array.isArray(payload) ? payload : payload?.items || payload?.data || [];
        setBrands(items);
      } catch (err) {
        if (err?.name !== 'AbortError') setErrorMessage('Network error. Please try again later.');
      }
    };
    load();
    return () => controller.abort();
  }, [API_URL]);

  const toggleBrand = (brandName) => {
    let next;
    if (selectedBrands.includes(brandName)) {
      next = selectedBrands.filter((b) => b !== brandName);
    } else {
      next = [...selectedBrands, brandName];
    }
    onChange && onChange(next);
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
        <>
          {errorMessage && (
            <div style={{ color: '#c62828', padding: '0.25rem 0' }}>{errorMessage}</div>
          )}
          <ul className={styles.list}>
            {brands.map((brand, idx) => {
              const name = brand?.brandName || 'Brand';
              return (
                <li key={`${name}-${idx}`} className={styles.item}>
                  <label className={styles.label}>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(name)}
                      onChange={() => toggleBrand(name)}
                      className={styles.checkbox}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default PopularBrands;
