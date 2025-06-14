import styles from './Catalog.module.css';

import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';
import NewsLetter from '@components/home/NewsLetter/NewsLetter';
// import Banner from '@components/home/Banner/Banner';

import CatalogFilters from '@components/catalog/CatalogFilters/CatalogFilters';
import CatalogSidebar from '@components/catalog/CatalogSidebar/CatalogSidebar';
import ActiveFilters from '@components/catalog/ActiveFilters/ActiveFilters';
import CatalogCard from '@components/catalog/CatalogCard/CatalogCard';

const mock = {
  name: 'Tomato',
  price: 6.22,
  kcal: 110,
  description: 'Ecologically clean, grown on our farm with love',
};

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
        <div className={styles.catalogContent}>
          <CatalogSidebar />

          <div className={styles.mainContent}>
            <CatalogFilters />
            <ActiveFilters
              filters={['Gluten free', 'Min $5 - Max 30']}
              onRemoveFilter={(f) => console.log('remove', f)}
              resultsCount={576}
            />
            <div className={styles.innerCards}>
              <CatalogCard {...mock} />
              <CatalogCard {...mock} />
              <CatalogCard {...mock} />
              <CatalogCard {...mock} />
              <CatalogCard {...mock} />
              <CatalogCard {...mock} />
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}
