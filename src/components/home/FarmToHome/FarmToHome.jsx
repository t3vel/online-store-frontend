import ProductItem from '@components/common/ProductItem/ProductItem';
import styles from './FarmToHome.module.css';
import picture from '@assets/images/tomatoes.png'; // Adjust the path as necessary
import Button from '@components/common/button/Button';

export default function FarmToHome() {
  return (
    <div className={styles.block}>
      <div className={styles.inner}>
        <div className={styles.title}>
          Fresh Organic Supply Direct From Farmer to Home
        </div>

        <ProductList />
        <div className={styles.nav}>
          <div className={styles.right}>
            <Button className={styles.show}>Show More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductItem
          key={index}
          image={picture}
          title="Tomato / 110 calories"
          content="Ecologically clean, grown on our farm with love"
          price="6.22"
        />
      ))}
    </div>
  );
}
