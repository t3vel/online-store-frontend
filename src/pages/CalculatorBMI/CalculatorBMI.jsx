import styles from './CalculatorBMI.module.css';
import NewsLetter from '@components/home/NewsLetter/NewsLetter';

export default function CalculatorBMI() {
  return (
    <div className={styles.container}>
      <div>gray box</div>
      <div>calculator block</div>
      <div>what your BMI means</div>
      <div>showcase block</div>
      <NewsLetter />
    </div>
  )
}