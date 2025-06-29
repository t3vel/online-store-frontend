import CatalogCard from "@components/catalog/CatalogCard/CatalogCard";
import { mockCard } from "@mocks/mockCard";
import { mockItem } from "@mocks/mockItem";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Item.module.css";
import DescriptionTab from "@components/item/DescriptionTab/DescriptionTab";
import AdditionalInfoTab from "@components/item/AdditionalInfoTab/AdditionalInfoTab";
import FeedbackTab from "@components/item/FeedbackTab/FeedbackTab";

export default function Item() {
  const { id } = useParams();

  const tabs = [
    {
      id: "descriptions",
      label: "Descriptions",
      content: <DescriptionTab />,
    },
    {
      id: "additionalInformation",
      label: "Profile",
      content: <AdditionalInfoTab />,
    },
    {
      id: "customerFeedback",
      label: "Settings",
      content: <FeedbackTab />,
    },
  ];

  const [productCount, setProductCount] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

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

      <div>
        <div className={styles.descriptionNavigationTabs}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={[
                styles.navigationTab,
                activeTab === tab.id ? styles.activeTab : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className={styles.descriptionDetailsContainer}>
          {tabs
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div key={tab.id} className={styles.descriptionDetails}>
                {tab.content}
              </div>
            ))}
          <div>
            <div className={styles.descriptionImage}></div>
            <div className={styles.badgesContainer}>
              <div className={styles.badge}>
                <div className={styles.badgeImage}></div>
                <div>
                  <div>Discount 20%</div>
                  <div className={styles.grayText}>
                    Save your 20% money with us
                  </div>
                </div>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeImage}></div>
                <div>
                  <div>Organic 100%</div>
                  <div className={styles.grayText}>100% Organic Vegetables</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <CatalogCard key={index} {...mockCard} />
          ))}
        </div>
      </div>

      <div className={styles.itemsShowcaseContainer}>
        <h3 className={styles.productListTitle}>Popular Products</h3>
        <div className={styles.otherProductCard}>
          {Array.from({ length: 4 }).map((_, index) => (
            <CatalogCard key={index} {...mockCard} />
          ))}
        </div>
      </div>
    </div>
  );
}
