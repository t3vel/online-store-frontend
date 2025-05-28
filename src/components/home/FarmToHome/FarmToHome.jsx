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
        <div className={styles.nav}>
          {/* <div className={styles.left}>
            <button className={styles.navBtn}>
              <img src={search} /> Searh by keywords
            </button>
            <button className={styles.navBtn}>
              <img src={filter} /> Filter by
            </button>
            <button className={styles.navBtn}>
              <img src={sliders} /> Sort by
            </button>
          </div> */}
          <div className={styles.right}>
            <button className={styles.show}>Show More</button>
          </div>
        </div>
        <Main />
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
        Order now <span className={styles.arrow}>&#8594;</span>
      </button>
    </div>
  );
}
