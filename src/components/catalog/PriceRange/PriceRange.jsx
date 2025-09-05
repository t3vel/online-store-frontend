import styles from './PriceRange.module.css';

export default function PriceRange({ min, max, onChange }) {
  const handleMin = (e) => onChange && onChange({ min: e.target.value, max });
  const handleMax = (e) => onChange && onChange({ min, max: e.target.value });

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.title}>Price Range</h4>
        <div className={styles.inputsInner}>
          <input
            type="number"
            className={styles.input}
            placeholder="Min price"
            value={min ?? ''}
            onChange={handleMin}
          />
          <span className={styles.separator}>-</span>
          <input
            type="number"
            className={styles.input}
            placeholder="Max price"
            value={max ?? ''}
            onChange={handleMax}
          />
        </div>
      </div>
    </>
  );
}
