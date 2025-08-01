import ActiveFilters from '@components/catalog/ActiveFilters/ActiveFilters';
import CatalogCard from '@components/catalog/CatalogCard/CatalogCard';
import CatalogCategories from '@components/catalog/CatalogCategories/CatalogCategories';
import CatalogFilters from '@components/catalog/CatalogFilters/CatalogFilters';
import CatalogSidebar from '@components/catalog/CatalogSidebar/CatalogSidebar';
import Banner from '@components/home/Banner/Banner';
import NewsLetter from '@components/home/NewsLetter/NewsLetter';
import { mockCard } from '@mocks/mockCard';
import styles from './Catalog.module.css';

export default function Catalog() {
  return (
    <>
      <Banner />
      <CatalogCategories />

      <div className={styles.topWrapper}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h2 className={styles.title}>Catalog</h2>
            <div className={styles.topRight}>
              <button className={styles.topLink} type="button">
                Delivery Information
              </button>
              <button className={styles.topLink} type="button">
                Payment Methods
              </button>
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
              {Array(12)
                .fill(mockCard)
                .map((card, index) => (
                  <CatalogCard key={index} {...card} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
