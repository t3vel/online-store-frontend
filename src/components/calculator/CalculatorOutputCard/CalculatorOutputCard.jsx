import scale from '@assets/images/scaleBMI.svg';
import styles from './CalculatorOutputCard.module.css';

export default function CalculatorOutputCard() {
  const resultNumber = 26.5;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        BMI Categories
      </h2>
      <main className={styles.mainContainer}>
        <div className={styles.resultsContainer}>
          <div className={styles.resultLabel}>Your BMI:</div>
          <div className={styles.resultNumber}>{resultNumber}</div>
          <div className={styles.scaleIndexContainer}>
            <img src={scale} alt="scale of BMI index" />
            <div className={styles.scaleIndexLabels}>
              <div>Underweight</div>
              <div>Healthy</div>
              <div>Overweight</div>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.legendContainer}>
          <div className={styles.underweightLabel}>Underweight - Below 18.5</div>
          <div className={styles.healthyLabel}>Healthy 18.5 - 24.9</div>
          <div className={styles.overweightLabel}>Overweight  25.0  + </div>
        </div>
      </main>
      <footer className={styles.footer}>Persons may consider seeking advice from their health care providers about their BMI. This calculator is not a substitute for professional medical advice.</footer>
    </div>
  );
}
