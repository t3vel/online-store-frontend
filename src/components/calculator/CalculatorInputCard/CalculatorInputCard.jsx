import styles from './CalculatorInputCard.module.css';

export default function CalculatorInputCard() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Adult BMI Calculator</h2>
      <main className={styles.main}>
        <div className={styles.genderButtonsContainer}>
          <button className={styles.maleButton}>
            <span className="material-symbols-outlined">male</span>
            Male
          </button>
          <button className={styles.femaleButton}>
            <span className="material-symbols-outlined">female</span>
            Female
          </button>
        </div>
        <div className={styles.inputsContainer}>
          <div>
            <div className={styles.inputLabel}>Age</div>
            <div>
              <input type="number" /> years ( yrs )
            </div>
          </div>
          <div>
            <div className={styles.inputLabel}>Height</div>
            <div>
              <input type="text" /> centimeters ( cm )
            </div>
          </div>
          <div>
            <div className={styles.inputLabel}>Weight</div>
            <div>
              <input type="text" /> kilograms ( kg )
            </div>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.resetButton}>Reset</button>
          <button className={styles.calculateButton}>Calculate</button>
        </div>
      </main>
    </div>
  );
}
