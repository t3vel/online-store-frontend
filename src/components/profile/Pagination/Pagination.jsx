import styles from './Pagination.module.css';

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <button aria-label="Previous Page" disabled>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.918 4.16634L7.08464 9.99967L12.918 15.833"
            stroke="#B3B3B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span className={styles.current}>1</span>
      <button aria-label="Next Page">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.08203 4.16634L12.9154 9.99967L7.08203 15.833"
            stroke="#B3B3B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
