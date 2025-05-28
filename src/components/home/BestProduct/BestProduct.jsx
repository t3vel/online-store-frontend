import styles from './BestProduct.module.css';
import picture from './img/picture1.png';

import Button from '@components/common/button/Button';

export default function BestProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <h2 className={styles.headTitle}>Our best Selling Products</h2>
          <Button className={styles.btn}>Show More</Button>
        </div>

        <div className={styles.inner}>
          {Array.from({ length: 3 }).map((_, index) => (
            <MainItem
              key={index}
              title="Tomato / 110 calories"
              content="Ecologically clean, grown on our farm with love"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MainItem({ title, content }) {
  return (
    <div className={styles.item}>
      <img className={picture} src={picture} alt="Product" />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
      </div>
      <button className={styles.btnOrder}>Order now &#8594;</button>
    </div>
  );
}
