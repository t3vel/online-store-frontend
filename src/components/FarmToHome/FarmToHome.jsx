import styles from "./FarmToHome.module.css";
import picture from "./img/picture1.png";

export default function FarmToHome() {
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        Fresh Organic Supply Direct From Farmer to Home
      </div>
      <div className={styles.nav}>
        <div className={styles.left}>
          <button>Searh by keywords</button>
          <button>Filter by</button>
          <button>Sort by</button>
        </div>
        <div className={styles.right}>
          <button className={styles.show}>Show More</button>
        </div>
      </div>
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className={styles.container}>
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
      <MainItem
        title={"Tomato / 110 calories"}
        content={"Ecologically clean, grown on our farm with love"}
      />
    </div>
  );
}

function MainItem({ title, content }) {
  return (
    <div>
      <img src={picture} />
      <div className="text">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </div>
      <button className={styles.order}>Order now &#8594;</button>
    </div>
  );
}
