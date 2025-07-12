import { useState } from 'react';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

import CartItem from '@/components/cart/CartItem/CartItem';
import CartTotal from '@/components/cart/CartTotal/CartTotal';

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Cold-Pressed Olive Oil - Extra Virgin',
      size: '250ml',
      price: 14.0,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Tomato',
      size: '1 kg',
      price: 6.97,
      quantity: 3,
    },
    {
      id: 3,
      name: 'Chia Seeds - Organic',
      size: '900g',
      price: 8.5,
      quantity: 5,
    },
    {
      id: 4,
      name: 'Fresh Mango',
      size: '1 pc',
      price: 5.92,
      quantity: 5,
    },
    {
      id: 5,
      name: 'Almond Butter - 100% Organic',
      size: '250g',
      price: 8.89,
      quantity: 3,
    },
    {
      id: 6,
      name: 'Almond Butter - 100% Organic',
      size: '350g',
      price: 88.89,
      quantity: 3,
    },
  ]);

  const handleChangeQuantity = (id, newQty) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.375 5.25L8.625 12L15.375 18.75"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="square"
          />
        </svg>
        <Link className={styles.link} to="/catalog">
          Catalog
        </Link>
      </div>
      <h1 className={styles.title}>My Shopping Cart</h1>

      <div className={styles.innerWrapper}>
        <div className={styles.table}>
          <div className={styles.header}>
            <span className={styles.tableTitle}>Product</span>
            <span className={styles.tableTitle}>Price</span>
            <span className={styles.tableTitle}>Quantity</span>
            <span className={styles.tableTitle}>Subtotal</span>
            <span className={styles.tableTitle}></span>
          </div>

          <div className={styles.itemInner}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  ...item,
                  subtotal: item.price * item.quantity,
                }}
                onQuantityChange={(newQty) =>
                  handleChangeQuantity(item.id, newQty)
                }
              />
            ))}
          </div>
        </div>

        <CartTotal />
      </div>
    </div>
  );
}
