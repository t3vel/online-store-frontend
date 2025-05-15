import styles from "./StartWith.module.css";
import rectangle from "./img/rectangle.png";

export default function StartWith() {
  return (
    <div className={styles.block}>
      <div className={styles.left}>
        <h2 className={styles.title}>Start with your Ideal Balance</h2>
        <p className={styles.untitle}>
          Check your BMI in seconds - and find the right foods to help you stay
          energized and in balance.
        </p>
        <p className={styles.content}>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.{" "}
        </p>
        <button className={styles.checkbtn}>Check Now</button>
      </div>
      <div className={styles.right}>
        <img src={rectangle} />
      </div>
    </div>
  );
}
