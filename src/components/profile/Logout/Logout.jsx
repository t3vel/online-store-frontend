import styles from './Logout.module.css';

export default function Logout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <button className={styles.closeButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M14.8289 9.17188L9.17188 14.8289M9.17188 9.17188L14.8289 14.8289"
              stroke="black"
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
          <button className={styles.confirmButton}>Log out</button>
        </div>
      </div>
    </div>
  );
}
