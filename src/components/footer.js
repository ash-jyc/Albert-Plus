import styles from '../styles/footer.module.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.downloadLinks}>
        <a href="#">Download from App Store</a>
        <a href="#">Download from Google Play</a>
        <a href="#">Download from AcademicPia</a>
      </div>
      <div className={styles.contactInfo}>
        <p>Need Help? Our support team is available</p>
        <p>📞 (123) 000-1111</p>
        <p>✉️ support@albertplus.com</p>
      </div>
      <div className={styles.socialMediaLinks}>
        {/* Icons for social media would go here */}
      </div>
    </footer>
  );
};

export default Footer;
