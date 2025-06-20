import { useState } from 'react';
import Tabs from '../Tabs/Tabs';
import OrdersTableContent from '../OrdersTableContent/OrdersTableContent';
import Pagination from '../Pagination/Pagination';
import styles from './OrdersTable.module.css';

export default function OrdersTable() {
  const [activeTab, setActiveTab] = useState('in-process');
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: 'ID - 3933',
      date: '29 May, 2025',
      total: '$135.00 (5 Products)',
      status: 'Processing',
    },
    {
      id: 'ID - 3934',
      date: '30 May, 2025',
      total: '$89.99 (3 Products)',
      status: 'Processing',
    },
    {
      id: 'ID - 3935',
      date: '31 May, 2025',
      total: '$59.00 (2 Products)',
      status: 'Cancelled',
    },
  ];

  return (
    <section className={styles.orders}>
      <div className={styles.container}>
        <h3 className={styles.title}>My Orders</h3>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <OrdersTableContent orders={orders} />
        <Pagination
          currentPage={currentPage}
          onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          onNext={() => setCurrentPage((p) => p + 1)}
        />
      </div>
    </section>
  );
}
