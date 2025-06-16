import styles from './PriceRange.module.css';

export default function PriceRange() {
  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.title}>Price Range</h4>
        <div className={styles.inputsInner}>
          <input type="text" className={styles.input} placeholder="Min price" />
          <span className={styles.separator}>-</span>
          <input type="text" className={styles.input} placeholder="Max price" />
        </div>
      </div>
    </>
  );
}
