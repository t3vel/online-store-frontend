import styles from './ActiveFilters.module.css';

export default function ActiveFilters({
  filters = [],
  onRemoveFilter,
  resultsCount,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <span className={styles.label}>Active Filters:</span>
        {filters.map((filter, index) => (
          <div key={index} className={styles.filterItem}>
            {filter}
            <button
              className={styles.removeBtn}
              onClick={() => onRemoveFilter(filter)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <strong>{resultsCount}</strong> Results found.
      </div>
    </div>
  );
}
