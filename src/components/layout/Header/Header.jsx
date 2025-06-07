import styles from './Header.module.css';

import logo from '@/assets/images/logo.png';
import searchIcon from '@/assets/icons/search.png';
import userIcon from '@/assets/icons/profile.png';
import cartIcon from '@/assets/icons/cart.png';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <nav className={styles.nav}>
            <Link to="/catalog" className={styles.link}>
              Catalog
            </Link>
            <a href="#" className={styles.link}>
              BMI Calculator
            </a>
            <a href="#" className={styles.link}>
              Our Mission
            </a>
            <a href="#" className={styles.link}>
              Heating News
            </a>
          </nav>
          <div className={styles.brand}>
            <Link to="/">
              <img src={logo} alt="RigthBite Logo" className={styles.logo} />
            </Link>

            <h1 className={`${styles.brandName} ${styles.visuallyHidden}`}>
              EcoHealth
            </h1>
          </div>

          <div className={styles.searchAndIcons}>
            <div className={styles.searchBox}>
              <input
                type="search"
                placeholder="What are you looking for?"
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <img src={searchIcon} alt="Search" />
              </button>
            </div>

            <div className={styles.icons}>
              <Link to="/signup" className={styles.iconButton}>
                <img src={userIcon} alt="User profile" />
              </Link>
              <button className={styles.iconButton}>
                <img src={cartIcon} alt="Shopping cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
