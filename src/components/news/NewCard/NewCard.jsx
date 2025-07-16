import styles from './NewCard.module.css';

export default function NewsCard({
  title,
  description,
  date,
  readTime,
  image,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <h3 className={styles.contentTitle}>{title}</h3>
          <div className={styles.meta}>
            <span>{date}</span>
            <span>Reading time: {readTime}</span>
          </div>
        </div>
        <p className={styles.contentDescription}>{description}</p>
        <button className={styles.button}>Read more</button>
      </div>
    </div>
  );
}
