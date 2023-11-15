import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Albert+</div>  
      <div className={styles.searchBar}>
        <i className={`fas fa-search ${styles.searchIcon}`}></i>
        <input type="text" className={styles.searchInput} placeholder="Search courses" />
      </div>
      <div className={styles.icons}>
        <span className={styles.icon}>♥</span>
        <span className={styles.icon}>🛒</span>
        <span className={styles.icon}>👤</span>
      </div>
    </header>
  );
}