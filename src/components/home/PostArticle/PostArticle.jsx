import frame from '@assets/images/frame.png';
import more from '@assets/icons/more.png';
import styles from './PostArticle.module.css';

export default function PostArticle() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Latest Posts & Articles</h2>
      <div className={styles.container}>
        <Item
          image={frame}
          date={'MAY 14 2025'}
          content={'What technologies are used in vertical farming?'}
        />
        <Item
          image={frame}
          date={'MAY 14 2025'}
          content={'What technologies are used in vertical farming?'}
        />
        <Item
          image={frame}
          date={'MAY 14 2025'}
          content={'What technologies are used in vertical farming?'}
        />
      </div>
    </div>
  );
}

function Item({ image, date, content }) {
  return (
    <section className={styles.section}>
      <img src={image} alt="article" />
      <div className={styles.flex}>
        <div>
          <p className={styles.data}>{date}</p>
          <p className={styles.content}>{content}</p>
        </div>
        <div>
          <a href="#">
            <img
              src={more}
              style={{ cursor: 'pointer', width: '42px', height: '42px' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
