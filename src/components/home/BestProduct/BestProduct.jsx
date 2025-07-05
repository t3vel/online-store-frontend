import ProductItem from '@components/common/ProductItem/ProductItem';

import styles from './BestProduct.module.css';
import picture from '@assets/images/gray-mock-block.png';

import Button from '@/components/common/button/Button';

export default function BestProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <h2 className={styles.headTitle}>Our best Selling Products</h2>
        </div>

        <div className={styles.inner}>
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductItem
              key={index}
              image={picture}
              title="Tomato / 110 calories"
              content="Ecologically clean, grown on our farm with love"
              price="6.22"
            />
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button className={styles.btn}>Show More</Button>
        </div>
      </div>
    </section>
  );
}
