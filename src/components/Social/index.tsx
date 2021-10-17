import React from 'react';
import styles from './Social.module.css';

const Social: React.FC = () => (
  <div className={styles.social}>
    <a href="https://vk.com">VK</a>
    <a href="https://www.instagram.com">INSTAGRAM</a>
    <a href="https://www.tiktok.com">TIKTOK</a>
  </div>
);

export default Social;
