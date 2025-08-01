import styles from './CartItem.module.css';

export default function CartItem({ item, onQuantityChange }) {
  const { price, quantity } = item;
  const subtotal = (price * quantity).toFixed(2);

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className={styles.row}>
      <div className={styles.product}>
        <div className={styles.imagePlaceholder} />
        <div className={styles.productInner}>
          <div className={styles.id}>{item.id}</div>
          <div className={styles.name}>
            {item.name} {item.size}
          </div>
          {item.description && (
            <div className={styles.desc}>{item.description}</div>
          )}
        </div>
      </div>

      <div className={styles.price}>€ {item.price.toFixed(2)}</div>

      <div className={styles.quantity}>
        <button onClick={handleDecrement} className={styles.quantityBtn}>
          -
        </button>
        <span className={styles.quantityNumber}>{item.quantity}</span>
        <button onClick={handleIncrement} className={styles.quantityBtn}>
          +
        </button>
      </div>

      <div className={styles.subtotal}>€ {subtotal}</div>

      <button className={styles.remove}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 5.5L18.88 15.525C18.722 18.086 18.643 19.367 18 20.288C17.6826 20.7432 17.2739 21.1273 16.8 21.416C15.843 22 14.56 22 11.994 22C9.424 22 8.139 22 7.18 21.415C6.70589 21.1257 6.29721 20.7409 5.98 20.285C5.338 19.363 5.26 18.08 5.106 15.515L4.5 5.5M3 5.5H21M16.056 5.5L15.373 4.092C14.92 3.156 14.693 2.689 14.302 2.397C14.2151 2.33232 14.1232 2.27479 14.027 2.225C13.594 2 13.074 2 12.035 2C10.969 2 10.436 2 9.995 2.234C9.89752 2.28621 9.80453 2.34642 9.717 2.414C9.322 2.717 9.101 3.202 8.659 4.171L8.053 5.5M9.5 16.5V10.5M14.5 16.5V10.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
