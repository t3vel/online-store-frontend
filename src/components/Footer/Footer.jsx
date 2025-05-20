import styles from './Footer.module.css';

import instagramIcon from '../../assets/social-icons/instagram.png';
import facebookIcon from '../../assets/social-icons/facebook.png';
import twitterIcon from '../../assets/social-icons/twitter.png';
import applePayIcon from '../../assets/social-icons/applepay.png';
import payPalIcon from '../../assets/social-icons/paypal.png';
import masterCardIcon from '../../assets/social-icons/mastercard.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.navColumns}>
          <div className={styles.navColumn}>
            <ul className={styles.navList}>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">BMI Calculator</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Healthy News</a>
              </li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <ul className={styles.navList}>
              <li>
                <a href="#">Basket</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className={styles.bottomSection}>
          <div className={styles.socials}>
            <a href="#">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>

          <p className={styles.copyright}>
            EcoHealth © 2025. All Rights Reserved
          </p>

          <div className={styles.payment}>
            <a href="#">
              <img src={payPalIcon} alt="PayPal" />
            </a>
            <a href="#">
              <img src={masterCardIcon} alt="MasterCard" />
            </a>
            <a href="#">
              <img src={applePayIcon} alt="Apple Pay" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
