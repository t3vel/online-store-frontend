import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navLeft}>
        <a href="#" className={styles.link}>
          Каталог
        </a>
        <a href="#" className={styles.link}>
          Калькулятор ІМТ
        </a>
        <a href="#" className={styles.link}>
          Контакти
        </a>
      </nav>

      <div className={styles.logo}>LOGO</div>

      <nav className={styles.navRight}>
        <a href="#" className={styles.link}>
          Авторизація
        </a>
        <a href="#" className={styles.link}>
          Кнопка пошуку
        </a>
        <a href="#" className={styles.link}>
          Кошик
        </a>
      </nav>
    </header>
  );
};

export default Header;
