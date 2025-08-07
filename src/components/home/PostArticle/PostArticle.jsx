import olive_oil from '@assets/images/olive_oil.jpg';
import frame2 from '@assets/images/ceasar_salad.jpg';
import frame3 from '@assets/images/vegetables_mix.png';
import more from '@assets/icons/more.png';
import styles from './PostArticle.module.css';

export default function PostArticle() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Latest Posts & Articles</h2>
      <div className={styles.container}>
        <Item
          image={olive_oil}
          date={'MAY 14 2025'}
          content={'What technologies are used in vertical farming?'}
        />
        <Item
          image={frame2}
          date={'MAY 14 2025'}
          content={'What technologies are used in vertical farming?'}
        />
        <Item
          image={frame3}
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
      <img src={image} alt="article" className={styles.image} />
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
