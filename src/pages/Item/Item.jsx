import { useParams } from "react-router-dom";
import styles from "./Item.module.css";

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
  };

  return (
    <div className={styles.container}>
      <div>
        <span>arrowBack</span>
        <span>Catalog</span>
      </div>

      <div className={styles.productInfoContainer}>
        <div className={styles.productImage}>image of product</div>
        <div className={styles.shortDescription}>
          {mockData.name} {mockData.weight}
          <p>Carbs: {mockData.carbs}</p>
          <p>Proteins: {mockData.proteins}</p>
          <p>Fats: {mockData.fats}</p>
          <p>Weight: {mockData.weight}</p>
          <p>Item Code: {mockData.code}</p>
        </div>
        <div className={styles.actionContainer}>short buy card</div>
        <button className={styles.descriptionButton}>description</button>
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
