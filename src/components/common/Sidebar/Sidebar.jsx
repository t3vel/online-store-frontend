import Breadcrumbs from '@/components/common/Breadcrumbs/Breadcrumbs';
import UserIcon from '@assets/icons/user.svg?react';
import OrdersIcon from '@assets/icons/orders.svg?react';
import LogoutIcon from '@assets/icons/logout.svg?react';

import styles from './Sidebar.module.css';

const links = [
  { id: 'personal', label: 'Personal Info', Icon: UserIcon },
  { id: 'orders', label: 'My Orders', Icon: OrdersIcon },
  { id: 'logout', label: 'Log out', Icon: LogoutIcon },
];

export default function Sidebar({ active, onChange }) {
  return (
    <aside className={styles.sidebar}>
      <Breadcrumbs />

      <div className={styles.inner}>
        <ul className={styles.list}>
          {links.map(({ id, label, Icon }) => (
            <li
              key={id}
              className={`${styles.item} ${active === id ? styles.active : ''}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onChange(id);
                }}
                className={styles.link}
              >
                <span className={styles.icon}>
                  <Icon aria-hidden="true" />
                </span>
                <span className={styles.label}>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
