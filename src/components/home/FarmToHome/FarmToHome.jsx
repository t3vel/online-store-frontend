import styles from './FarmToHome.module.css';
import picture from './img/picture1.png';
// import search from './img/search-icon.png';
// import filter from './img/filter-icon.png';
// import sliders from './img/sliders-icon.png';

export default function FarmToHome() {
  return (
    <div className={styles.block}>
      <div className={styles.inner}>
        <div className={styles.title}>
          Fresh Organic Supply Direct From Farmer to Home
        </div>

        <Main />
        <div className={styles.nav}>
          <div className={styles.right}>
            <a className={styles.show}>Show More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 6 }).map((_, index) => (
        <MainItem
          key={index}
          title="Tomato / 110 calories"
          content="Ecologically clean, grown on our farm with love"
        />
      ))}
    </div>
  );
}

function MainItem({ title, content }) {
  return (
    <div>
      <img src={picture} />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
      </div>
      <button className={styles.order}>
        Order now{' '}
        <span className={styles.arrow}>
          <svg
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0481 13.1001C17.91 13.2288 17.7991 13.384 17.7223 13.5565C17.6454 13.729 17.6041 13.9153 17.6008 14.1041C17.5974 14.2929 17.6322 14.4804 17.7029 14.6555C17.7736 14.8307 17.8789 14.9897 18.0124 15.1232C18.146 15.2568 18.305 15.3621 18.4801 15.4328C18.6552 15.5035 18.8428 15.5382 19.0316 15.5349C19.2204 15.5316 19.4066 15.4903 19.5791 15.4134C19.7516 15.3365 19.9069 15.2257 20.0356 15.0876L26.1294 8.9938L27.125 8.00005L26.1313 7.0063L20.0375 0.912551C19.7724 0.656264 19.4172 0.514352 19.0485 0.517381C18.6798 0.520411 18.327 0.668138 18.0662 0.928747C17.8053 1.18935 17.6573 1.54199 17.6539 1.91071C17.6505 2.27942 17.7921 2.63471 18.0481 2.90005L21.7419 6.5938H2.28125C1.90829 6.5938 1.5506 6.74196 1.28688 7.00568C1.02316 7.26941 0.875 7.62709 0.875 8.00005C0.875 8.37301 1.02316 8.7307 1.28688 8.99442C1.5506 9.25814 1.90829 9.4063 2.28125 9.4063H21.7419L18.0481 13.1001Z"
              fill="black"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
