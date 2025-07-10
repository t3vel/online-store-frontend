import styles from "./CalculatorBMI.module.css";
import NewsLetter from "@components/home/NewsLetter/NewsLetter";
import rectangle from "@assets/images/rectangle.png";
import CalculatorInputCard from "../../components/calculator/CalculatorInputCard/CalculatorInputCard";
import CalculatorOutputCard from "../../components/calculator/CalculatorOutputCard/CalculatorOutputCard";
import CatalogCard from "@components/catalog/CatalogCard/CatalogCard";
import { mockCard } from "@mocks/mockCard";

export default function CalculatorBMI() {
  return (
    <div className={styles.container}>
      <div className={styles.grayBox}></div>
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <div>
            <h2 className={styles.header}>BMI Calculator</h2>
            <div className={styles.infoText}>
              <span style={{ marginTop: "24px", display: "inline-block" }}>
                <b>Body mass index (BMI)</b> is a measure of body fat based on
                height and weight that applies to adult men and women. Your BMI
                is just one piece of the puzzle. It’s based on height and weight
                but doesn’t take into account your muscle mass, bone density, or
                body composition. Your healthcare provider will consider whether
                your BMI is too high or too low for you.
              </span>
              <span style={{ marginTop: "1lh", display: "inline-block" }}>
                At our organic store we use your BMA to help recommend products
                that best support your body's current needs. Whether you're
                aiming to lose weight build straingth or maintain balance we
                offer clean nutrient-reach foodstailored to your wellness
                journey because real house starts with the right fuel for your
                body
              </span>
            </div>
          </div>
          <div>
            <img src={rectangle} alt="mock gray block image" />
          </div>
        </div>

        <div className={styles.calculatorContainer}>
          <div>
            <h2 className={styles.header}>
              Calculate your body mass index (BMI) for adults
            </h2>
          </div>
          <div className={styles.calculatorCardsContainer}>
            <CalculatorInputCard />
            <CalculatorOutputCard />
          </div>
        </div>
      </div>

      <div className={styles.resultExplanations}>
        <div>
          <h2 className={styles.header}>What your BMI results means</h2>
          <div className={styles.infoText}>
            <span style={{ marginTop: "24px", display: "inline-block" }}>
              A BMI score of between 25 and 29.9 is classed as 'overweight'.
              This category of BMI is associated with a higher risk of health
              conditions, such as, heart disease and certain types of cancer.
              Healthy weight loss
            </span>
            <span style={{ marginTop: "1lh", display: "inline-block" }}>
              If you want to lose weight, a good approach is to reduce your
              calorie intake by around 600 calories per day. This can be
              achieved by reducing high calorie foods such as sugary drinks, and
              ultra processed foods such as biscuits and crisps. Consuming
              plenty of fibre and protein will keep you fuller for longer and
              help to prevent overeating. Managing stress and sleeping well can
              also make it easier to eat well. Increasing your physical activity
              has many benefits and can help to you to use more energy each day.
            </span>
          </div>
        </div>
        <div className={styles.whiteBlock}></div>
      </div>
      <div>
        <div className={styles.itemsShowcaseContainer}>
          <div className={styles.similarProductListHeader}>
            <h3 className={styles.productListTitle}>
              Personalized recomendations
            </h3>
            <button className={styles.showMoreButton}>
              Show More
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
          <div className={styles.otherProductCard}>
            {Array.from({ length: 4 }).map((_, index) => (
              <CatalogCard key={index} {...mockCard} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={styles.itemsShowcaseContainer}>
          <div className={styles.similarProductListHeader}>
            <h3 className={styles.productListTitle}>
              Our Bestsellers
            </h3>
            <button className={styles.showMoreButton}>
              Show More
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
          <div className={styles.otherProductCard}>
            {Array.from({ length: 4 }).map((_, index) => (
              <CatalogCard key={index} {...mockCard} />
            ))}
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
