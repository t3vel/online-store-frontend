import { useAuth } from '@/context/AuthContext';
import styles from './Logout.module.css';
import { useState } from 'react';

export default function Logout() {
  const { accessToken, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await fetch('https://right-bite-store.onrender.com/api/v1/auth/logout', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      logout();
    } catch (err) {
      console.error('Logout failed', err);
      logout();
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <button className={styles.closeButton}>
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7033 40.9066C31.5855 40.9066 40.4066 32.0855 40.4066 21.2033C40.4066 10.3212 31.5855 1.5 20.7033 1.5C9.82118 1.5 1 10.3212 1 21.2033C1 32.0855 9.82118 40.9066 20.7033 40.9066Z"
              stroke="#2D6B41"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M26.2751 15.6309L15.1289 26.777M15.1289 15.6309L26.2751 26.777"
              stroke="#2D6B41"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className={styles.header}>
          <h4 className={styles.title}>Confirm Log out</h4>
          <p className={styles.message}>Are you sure you want to log out?</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.cancelButton}>Cancel</button>
          <button
            className={styles.confirmButton}
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? 'Logging out...' : 'Log out'}
          </button>
        </div>
      </div>
    </div>
  );
}
