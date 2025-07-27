import cabbage from '@assets/images/cabbage.png';
import carrot from '@assets/images/carrot.png';
import cauliflower from '@assets/images/cauliflower.png';
import pepper from '@assets/images/pepper.png';
import tomatoes from '@assets/images/tomatoes.png';
import tomatoes2 from '@assets/images/tomatoes_2.png';
import tomatoes3 from '@assets/images/tomatoes_3.png';
import tomatoes4 from '@assets/images/tomatoes_4.png';
import tomatoes_5 from '@assets/images/tomatoes_5.png';
import tomatoes5 from '@assets/images/tomatoes_5.png';
import CatalogCard from '@components/catalog/CatalogCard/CatalogCard';
import { mockItem } from '@mocks/mockItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

// Helper to generate a distinct mock object for each card
const generateMockCard = (index) => {
  const images = [
    cabbage,
    carrot,
    cauliflower,
    pepper,
    tomatoes,
    tomatoes2,
    tomatoes3,
    tomatoes4,
    tomatoes5,
  ];
  const names = [
    'Tomato', 'Carrot', 'Cauliflower', 'Pepper', 'Cabbage', 'Tomatoes', 'Veggie Mix', 'Fresh Veg', 'Salad Star',
  ];
  return {
    name: names[index % names.length],
    price: (6.22 + index).toFixed(2),
    kcal: 110 + index * 10,
    description: `Ecologically clean, grown on our farm with love. Card #${index + 1}`,
    imageUrl: images[index % images.length],
  };
};

export default function Item() {
  // const { id } = useParams();

  const [productCount, setProductCount] = useState(1);

  const decrementProductCount = () => {
    setProductCount((prevCount) => {
      if (prevCount === 1) {
        return 1;
      }
      return prevCount - 1;
    });
  };

  const incrementProductCount = () => {
    setProductCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.container}>
      <Link to="/catalog" className={styles.navigation}>
        <span className="material-symbols-outlined">chevron_left</span>
        <span>Catalog</span>
      </Link>

      <div className={styles.shortInfoContainer}>
        <div className={styles.productImage}>
          <img src={tomatoes_5} alt={'tomatoes'} />
        </div>
        <div className={styles.detailsBlock}>
          <div className={styles.briefPanel}>
            <h3 className={styles.productName}>Cherry tomatoes</h3>
            <div className={styles.productNumber}>8000500023976</div>
            <span className={styles.actualPrice}>€ 14.25</span>
            <div className={styles.prices}>
              <div className={styles.oldPriceContainer}>
                <div className={styles.oldPrice}>€ 19.00</div>
                <div className={styles.discountBadge}>
                  {mockItem.discount} Off
                </div>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.productAmount}>
                  <div
                    className={styles.changeProductAmountIcon}
                    onClick={decrementProductCount}
                  >
                    -
                  </div>
                  <div>{productCount}</div>
                  <div
                    className={styles.changeProductAmountIcon}
                    onClick={incrementProductCount}
                  >
                    +
                  </div>
                </div>
                <button className={styles.addToCartButton}>
                  <div className="material-symbols-outlined">shopping_bag</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.detailedInfo}>
            <div className={styles.infoBlock}>
              <h3>Description</h3>
              <p>
                Sweet and juicy, cherry tomatoes are ideal for snacking or
                adding a burst of flavor to any dish.
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h3>General Information</h3>
              <div>
                <span>Product name: </span>
                <span>Cherry Tomatoes</span>
              </div>
              <div>
                <span>Brand: </span>
                <span className={styles.textUnderlined}>LaSelva</span>
              </div>
              <div>
                <span>Category: </span>
                <span className={styles.textUnderlined}>Vegetable</span>
              </div>
            </div>
            <div className={styles.infoBlock}>
              <h3>Nutrition Value</h3>
              <div className={styles.nutritionRow}>
                <div className={styles.nutritionClauseIcon}>
                  <span className="material-symbols-outlined">check</span>
                </div>
                <span>{'Protein : 3.6 g'}</span>
              </div>
              <div className={styles.nutritionRow}>
                <div className={styles.nutritionClauseIcon}>
                  <span className="material-symbols-outlined">check</span>
                </div>
                <span>{'Fat : 0.2 g'}</span>
              </div>
              <div className={styles.nutritionRow}>
                <div className={styles.nutritionClauseIcon}>
                  <span className="material-symbols-outlined">check</span>
                </div>
                <span>{'Carbohydrates : 0.9 g'}</span>
              </div>
              <div className={styles.nutritionRow}>
                <div className={styles.nutritionClauseIcon}>
                  <span className="material-symbols-outlined">check</span>
                </div>
                <span>{'Vitamins (per 100g) : Vitamin C, Vitamin A'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.otherItemsContainer}>
        <div className={styles.itemsShowcaseContainer}>
          <div className={styles.similarProductListHeader}>
            <h3 className={styles.productListTitle}>Similar Products</h3>
            <button className={styles.showMoreButton}>
              Show More
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
          <div className={styles.otherProductCard}>
            {Array.from({ length: 4 }).map((_, index) => (
              <CatalogCard key={index} {...generateMockCard(index)} />
            ))}
          </div>
        </div>

        <div className={styles.itemsShowcaseContainer}>
          <h3 className={styles.productListTitle}>You might also like</h3>
          <div className={styles.otherProductCard}>
            {Array.from({ length: 4 }).map((_, index) => (
              <CatalogCard key={index} {...generateMockCard(index + 4)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
