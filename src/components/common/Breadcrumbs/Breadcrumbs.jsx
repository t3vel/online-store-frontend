import { useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const breadcrumbNameMap = {
  '/profile': 'Personal Info',
};

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;
  const name = breadcrumbNameMap[path];

  if (!name) return null;

  return (
    <nav className={styles.breadcrumbs}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.375 5.75L8.625 12.5L15.375 19.25"
          stroke="black"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
      </svg>

      <a className={styles.link}>{name}</a>
    </nav>
  );
}
