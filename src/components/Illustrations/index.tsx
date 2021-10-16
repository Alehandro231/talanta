import React from 'react';
import IllustrationsImg from '../../public/Illustrations.png';
import styles from './Illustrations.module.css';

const Illustrations: React.FC = () =>
  <div className={styles.illustrations}>
    <img src={IllustrationsImg} alt="Illustrations" />
  </div>

export default Illustrations;
