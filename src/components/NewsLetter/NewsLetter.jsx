import styles from './NewsLetter.module.css';

export default function NewsLetter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>Subcribe our Newsletter</h2>
          <p className={styles.text}>
            Receive useful tips and exclusive offers
          </p>
        </div>
        <div className={styles.rigth}>
          <form className={styles.form} action="#!">
            <input
              className={styles.input}
              type="text"
              placeholder="Your email address"
            />
            <button className={styles.btn}>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}
