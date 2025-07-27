import logo from '@assets/images/logo.svg';
import facebookIcon from '@assets/social-icons/facebook.png';
import instagramIcon from '@assets/social-icons/instagram.png';
import masterCardIcon from '@assets/social-icons/mastercard.png';
import twitterIcon from '@assets/social-icons/twitter.png';
import visaIcon from '@assets/social-icons/visa.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.fullWidthLine}></div>
      <div className={styles.container}>
        <nav className={styles.navColumns}>
          <div className={styles.logoContainer}>
            <button type="button">
              <img src={logo} alt="Logotype RightBite" />
            </button>
          </div>
          <div className={styles.navColumn}>
            <ul className={styles.navList}>
              <li>
                <button type="button">Catalog</button>
              </li>
              <li>
                <button type="button">BMI Calculator</button>
              </li>
              <li>
                <button type="button">Our Mission</button>
              </li>
              <li>
                <button type="button">Healthy News</button>
              </li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <ul className={styles.navList}>
              <li>
                <button type="button">BASKET</button>
              </li>
              <li>
                <button type="button">PROFILE</button>
              </li>
              <li>
                <button type="button">BLOG</button>
              </li>
              <li>
                <button type="button">NEWS</button>
              </li>
            </ul>
          </div>
          <div className={styles.navColumn}>
            <ul className={styles.navList}>
              <li>
                <button type="button">FRUITS</button>
              </li>
              <li>
                <button type="button">VEGETABLES</button>
              </li>
              <li>
                <button type="button">MEAT</button>
              </li>
              <li>
                <button type="button">FISH </button>
              </li>
            </ul>
          </div>
          <div className={styles.navColumn}>
            <ul className={styles.navList}>
              <li>
                <button type="button">GROCERIES </button>
              </li>
              <li>
                <button type="button">DESSERTS </button>
              </li>
              <li>
                <button type="button">DRINKS</button>
              </li>
              <li>
                <button type="button">CRAFT CHEESE</button>
              </li>
            </ul>
          </div>
        </nav>

        <div className={styles.bottomSection}>
          <div className={styles.socials}>
            <button type="button">
              <img src={instagramIcon} alt="Instagram" />
            </button>
            <button type="button">
              <img src={facebookIcon} alt="Facebook" />
            </button>
            <button type="button">
              <img src={twitterIcon} alt="Twitter" />
            </button>
          </div>

          <p className={styles.copyright}>
            RightBite © 2025. All Rights Reserved
          </p>

          <div className={styles.payment}>
            <a href="#">
              <img src={masterCardIcon} alt="MasterCard" />
            </a>
            <a href="#">
              <img src={visaIcon} alt="Visa" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
