import styles from "./DescriptionTab.module.css";

export default function DescriptionTab({}) {
  return (
    <div className={styles.descriptionText}>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, facilis
        harum atque dolore earum, quae in quas magnam nesciunt deserunt,
        possimus quos est blanditiis fugiat.
      </div>
      <div>
        <div className={styles.nutritionRowInfo}>
          <span className="material-symbols-outlined">check_circle</span>
          Protein : 3.6 g
        </div>
        <div className={styles.nutritionRowInfo}>
          <span className="material-symbols-outlined">check_circle</span>
          Fats : 0.2 g
        </div>
        <div className={styles.nutritionRowInfo}>
          <span className="material-symbols-outlined">check_circle</span>
          Carbohydrates : 0.9 g
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        amet reprehenderit repudiandae voluptatum dolores ipsa?
      </div>
    </div>
  );
}
