import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>Albert+</div>
      <input type="text" className={styles.searchBar} placeholder="Search courses" />
      <div className={styles.icons}>
        <span className={styles.icon}>♥</span>
        <span className={styles.icon}>🛒</span>
        <span className={styles.icon}>👤</span>
      </div>
    </header>
  );
}