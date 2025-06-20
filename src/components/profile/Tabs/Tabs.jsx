import styles from './Tabs.module.css';

export default function Tabs({ activeTab, onTabChange }) {
  const tabs = [
    { key: 'in-process', label: 'In Process' },
    { key: 'completed', label: 'Completed Orders' },
    { key: 'cancelled', label: 'Cancelled Orders' },
    { key: 'history', label: 'Order History' },
  ];

  return (
    <nav className={styles.tabs}>
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          className={`${styles.tabsBtn} ${
            activeTab === key ? styles.active : ''
          }`}
          onClick={() => onTabChange(key)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
