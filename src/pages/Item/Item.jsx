import { useParams } from "react-router-dom";
import styles from "./Item.module.css";
import { Link } from 'react-router-dom';

export default function Item() {
  const { id } = useParams();

  const mockData = {
    id: "1",
    image: "string",
    name: "Cherry Tomato",
    weight: "250g",
    carbs: "5g",
    proteins: "1g",
    fats: "0g",
    code: "CT-250",
    brand: "LaSelva",
    category: "Vegetable",
    oldPrice: "$200",
    newPrice: "$150",
    discount: "25%",
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
                  {mockData.brand}
                </span>
                <span>Category: </span>
                <span className={styles.styledProductTypeText}>
                  {mockData.category}
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
            <div className={styles.discountBadge}>{mockData.discount} Off</div>
            <div className={styles.prices}>
              <span className={styles.oldPrice}>$19.00</span>
              <span className={styles.actualPrice}>$14.25</span>
            </div>
            <div className={styles.actionButtons}>
              <div className={styles.productAmount}>
                <div className={styles.changeProductAmountIcon}>-</div>
                <div>5</div>
                <div className={styles.changeProductAmountIcon}>+</div>
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
        <div>images</div>
      </div>

      <div className={styles.itemsShowcaseContainer}>
        <div>Popular Products</div>
        <div>images</div>
      </div>
    </div>
  );
}
