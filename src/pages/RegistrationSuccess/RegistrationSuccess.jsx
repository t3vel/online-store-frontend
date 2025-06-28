import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

import { Link } from 'react-router-dom';

import styles from './RegistrationSuccess.module.css';
export default function RegistrationSuccess() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.inner}>
            <div className={styles.top}>
              <svg
                width="139"
                height="139"
                viewBox="0 0 139 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="69.5" cy="69.5" r="69.5" fill="#D9D9D9" />
              </svg>
              <p className={styles.title}>
                Account created successfully! Welcome to RightBite!
              </p>
            </div>
            <div className={styles.bottom}>
              <Link to="/profile" className={styles.account}>
                My account
              </Link>
              <Link to="/" className={styles.catalog}>
                Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
