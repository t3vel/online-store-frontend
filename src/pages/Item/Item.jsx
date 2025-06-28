import CatalogCard from "@components/catalog/CatalogCard/CatalogCard";
import { mockCard } from "@mocks/mockCard";
import { mockItem } from "@mocks/mockItem";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Item.module.css";

export default function Item() {
  const { id } = useParams();

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
        <div className={styles.productImage}></div>
        <div className={styles.shortInfo}>
          <div>
            <div className={styles.productType}>
              <div>
                <span>Brand: </span>
                <span className={styles.styledProductTypeText}>
                  {mockItem.brand}
                </span>
                <span>Category: </span>
                <span className={styles.styledProductTypeText}>
                  {mockItem.category}
                </span>
              </div>
            </div>
            <h3 className={styles.productName}>Cherry tomatoes 110g</h3>
            <div className={styles.nutritionInfo}>
              Carbs: 0.9g Proteins: 3.6g Fats: 0.2g
            </div>
            <div className={styles.productNumber}>8000500023976</div>
          </div>
          <div>
            <div className={styles.discountBadge}>{mockItem.discount} Off</div>
            <div className={styles.prices}>
              <span className={styles.oldPrice}>$19.00</span>
              <span className={styles.actualPrice}>$14.25</span>
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
                <div>Add to Cart</div>
                <div className="material-symbols-outlined">shopping_bag</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.itemsShowcaseContainer}>
        <div>Similar Products</div>
        <div className={styles.otherProductCard}>
          {Array.from({ length: 4 }).map((_, index) => (
            <CatalogCard key={index} {...mockCard} />
          ))}
        </div>
      </div>

      <div className={styles.itemsShowcaseContainer}>
        <h2>Popular Products</h2>
        <div className={styles.otherProductCard}>
          {Array.from({ length: 4 }).map((_, index) => (
            <CatalogCard key={index} {...mockCard} />
          ))}
        </div>
      </div>
    </div>
  );
}
