import styles from "./Catalog.module.css";

import Banner from "@components/home/Banner/Banner";
import NewsLetter from "@components/home/NewsLetter/NewsLetter";

import ActiveFilters from "@components/catalog/ActiveFilters/ActiveFilters";
import CatalogCard from "@components/catalog/CatalogCard/CatalogCard";
import CatalogCategories from "@components/catalog/CatalogCategories/CatalogCategories";
import CatalogFilters from "@components/catalog/CatalogFilters/CatalogFilters";
import CatalogSidebar from "@components/catalog/CatalogSidebar/CatalogSidebar";
import { mockCard } from "@mocks/mockCard";

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
              filters={["Gluten free", "Min $5 - Max 30"]}
              onRemoveFilter={(f) => console.log("remove", f)}
              resultsCount={576}
            />
            <div className={styles.innerCards}>
              <CatalogCard {...mockCard} />
              <CatalogCard {...mockCard} />
              <CatalogCard {...mockCard} />
              <CatalogCard {...mockCard} />
              <CatalogCard {...mockCard} />
              <CatalogCard {...mockCard} />
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
