import styles from './CartTotal.module.css';

export default function CartTotal() {
  return (
    <div className={styles.cartTotalContainer}>
      <h4 className={styles.cartTotalTitle}>Cart Total</h4>
      <div className={styles.cartTotalWrapper}>
        <div className={styles.cartTotalDetails}>
          <div className={styles.row}>
            <span>Subtotal</span>
            <span>€ 147.68</span>
          </div>
          <div className={styles.row}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={`${styles.row} ${styles.totalRow}`}>
            <span>Total</span>
            <span className={styles.totalAmount}>€ 147.68</span>
          </div>
        </div>

        <div className={styles.couponSection}>
          <input
            type="text"
            placeholder="Enter your Code"
            className={styles.couponInput}
          />
          <button className={styles.couponButton}>Apply Coupon</button>
        </div>

        <div className={styles.line}></div>

        <button className={styles.checkoutButton}>Proceed to checkout</button>
      </div>
    </div>
  );
}
