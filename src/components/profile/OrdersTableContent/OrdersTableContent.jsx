import styles from './OrdersTableContent.module.css';

export default function OrdersTableContent({ orders }) {
  return (
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
        {orders.map((order, index) => (
          <tr key={index}>
            <td>{order.id}</td>
            <td className={styles.date}>{order.date}</td>
            <td>{order.total}</td>
            <td>{order.status}</td>
            <td>
              <button>View Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
