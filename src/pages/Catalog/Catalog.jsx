import styles from './Catalog.module.css';

import Header from '@components/layout/Header/Header';
// import Banner from '@components/home/Banner/Banner';

import CatalogFilters from '@components/catalog/CatalogFilters/CatalogFilters';
import CatalogSidebar from '@components/catalog/CatalogSidebar/CatalogSidebar';

export default function Catalog() {
  return (
    <>
      <Header />
      {/* <Banner /> */}

      <div className={styles.topWrapper}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h2 className={styles.title}>Catalog</h2>
            <div className={styles.topRight}>
              <a className={styles.topLink} href="#">
                Delivery Information
              </a>
              <a className={styles.topLink} href="#">
                Payment Methods
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <CatalogFilters />
        <CatalogSidebar />
      </div>
    </>
  );
}
