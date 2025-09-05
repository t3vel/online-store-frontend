import styles from './CatalogFilters.module.css';

export default function CatalogFilters({ sortBy, onSortByChange, aZ, onAZChange, size, onSizeChange }) {
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

      <select className={styles.select} value={sortBy} onChange={(e) => onSortByChange && onSortByChange(e.target.value)}>
        <option value="">Sort by</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="rating">Rating</option>
        <option value="popular">Popular</option>
      </select>

      <select className={styles.select} value={aZ} onChange={(e) => onAZChange && onAZChange(e.target.value)}>
        <option value="">A - Z</option>
        <option value="a">A-Z</option>
        <option value="z">Z-A</option>
      </select>

      <select className={styles.select} value={size} onChange={(e) => onSizeChange && onSizeChange(Number(e.target.value))}>
        <option value={10}>Show: 10</option>
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={48}>48</option>
      </select>
    </div>
  );
}
