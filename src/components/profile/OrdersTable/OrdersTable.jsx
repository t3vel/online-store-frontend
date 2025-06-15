import styles from './OrdersTable.module.css';

export default function OrdersTable() {
  return (
    <section className={styles.orders}>
      <div className={styles.container}>
        <h3 className={styles.title}>My Orders</h3>

        <nav className={styles.tabs}>
          <button className={styles.tabsBtn}>In Process</button>
          <button className={styles.tabsBtn}>Complited Orders</button>
          <button className={styles.tabsBtn}>Cancelled Orders</button>
          <button className={styles.tabsBtn}>Order History</button>
        </nav>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableTop}>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID - 3933</td>
              <td>29 May, 2025</td>
              <td>$135.00 (5 Products)</td>
              <td>Processing</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
            <tr>
              <td>ID - 3933</td>
              <td>29 May, 2025</td>
              <td>$135.00 (5 Products)</td>
              <td>Processing</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
            <tr>
              <td>ID - 3933</td>
              <td>29 May, 2025</td>
              <td>$135.00 (5 Products)</td>
              <td>Cancelled</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.pagination}>
          <button aria-label="Previous Page" disabled>
            {'<'}
          </button>
          <span className={styles.current}>1</span>
          <button aria-label="Next Page">{'>'}</button>
        </div>
      </div>
    </section>
  );
}
