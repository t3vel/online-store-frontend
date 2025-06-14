import styles from './ProductItem.module.css';

import arrowRight from '@/assets/icons/arrow-right.svg';
import euroIcon from '@/assets/icons/euro.svg';

export default function ProductItem({ image, title, content, price }) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt="Product" />
      <div className={styles.textInner}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
      </div>
      <div className={styles.orderInner}>
        <div className={styles.badge}>
          <img src={euroIcon} alt="" />
          <span className={styles.price}>{price}</span>
        </div>
        <button className={styles.btnOrder}>
          Order now
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}
