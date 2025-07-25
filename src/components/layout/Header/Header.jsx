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
            <Link to="/calculator" className={styles.link}>
              BMI Calculator
            </Link>
            <a href="#" className={styles.link}>
              Our Mission
            </a>
            <Link to="/news" className={styles.link}>
              Heating News
            </Link>
          </nav>
          <div className={styles.brand}>
            <Link to="/">
              <img src={logo} alt="RigthBite Logo" className={styles.logo} />
            </Link>

            <h1 className={`${styles.brandName} ${styles.visuallyHidden}`}>
              RightBite
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
              <Link to="/cart" className={styles.iconButton}>
                <img src={cartIcon} alt="Shopping cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
