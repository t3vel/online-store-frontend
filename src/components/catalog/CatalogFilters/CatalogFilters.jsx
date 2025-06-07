import styles from './CatalogFilters.module.css';

export default function CatalogFilters() {
  return (
    <div className={styles.filtersWrapper}>
      <select className={styles.select}>
        <option>Select Price</option>
        <option value="0-10">€0 - €10</option>
        <option value="10-20">€10 - €20</option>
        <option value="20-30">€20 - €30</option>
      </select>

      <select className={styles.select}>
        <option>Type of Product</option>
        <option value="vegetables">Vegetables</option>
        <option value="fruits">Fruits</option>
        <option value="snacks">Snacks</option>
      </select>

      <select className={styles.select}>
        <option>Sort by Rating</option>
        <option value="high">High to Low</option>
        <option value="low">Low to High</option>
      </select>

      <select className={styles.select}>
        <option>Sort by A - Z</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>

      <select className={styles.select}>
        <option>Sort by: Latest</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>

      <select className={styles.select}>
        <option>Show : 24 Items</option>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="48">48</option>
      </select>
    </div>
  );
}
