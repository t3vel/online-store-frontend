import styles from './AdvantagesList.module.css';
import ellipse from '../../assets/images/ellipse.png';

const features = [
  {
    title: 'ORGANICALLY GROWN',
    description: 'Borem ipsum dolor sit amet consectetur',
    image: ellipse,
  },
  {
    title: 'LOREM IPSUM WIEFWLEI',
    description: 'Borem ipsum dolor sit amet consectetur',
    image: ellipse,
  },
  {
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $150',
    image: ellipse,
  },
  {
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
    image: ellipse,
  },
];

export default function AdvantagesList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerAdvantages}>
        {features.map((feature, index) => (
          <div key={index} className={styles.advantagesCard}>
            <img className={styles.image} src={ellipse} alt="" />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
