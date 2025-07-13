import styles from './QuantityControl.module.css';

export default function QuantityControl({ quantity, onDecrease, onIncrease }) {
  return (
    <div className={styles.control}>
      <button className={styles.btn} onClick={onDecrease}>
        −
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.btn} onClick={onIncrease}>
        +
      </button>
    </div>
  );
}
