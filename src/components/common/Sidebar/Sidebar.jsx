import styles from './Sidebar.module.css';

const links = [
  { id: 'personal', label: 'Personal Info' },
  { id: 'orders', label: 'My Orders' },
  { id: 'logout', label: 'Log out' },
];

export default function Sidebar({ active, onChange }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.inner}>
        {links.map((link) => (
          <a
            key={link.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onChange(link.id);
            }}
            className={`${styles.link} ${
              active === link.id ? styles.active : ''
            }`}
          >
            <span className={styles.dot}>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                <circle
                  cx="10"
                  cy="10.5"
                  r="10"
                  fill={active === link.id ? '#717171' : '#D9D9D9'}
                />
              </svg>
            </span>
            <span className={styles.label}>{link.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
