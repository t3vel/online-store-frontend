import styles from './AdvantagesList.module.css';

import security from '@assets/icons/security.png';
import car from '@assets/icons/car.png';
import headphones from '@assets/icons/headphones.png';

const features = [
  {
    title: 'ORGANICALLY GROWN',
    description: 'Only ecological products',
    image: security,
  },
  {
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $150',
    image: car,
  },
  {
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
    image: headphones,
  },
];

export default function AdvantagesList() {
  return (
    <div className={styles.container}>
      <div className={styles.innerAdvantages}>
        {features.map((feature, index) => (
          <div key={index} className={styles.advantagesCard}>
            <img className={styles.image} src={feature.image} alt="" />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
