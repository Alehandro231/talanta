import React from "react";
import Illustrations from '../Illustrations';
import Logo from '../Logo';
import Registration from '../Registration';
import Social from '../Social';
import Authorization from '../Authorization';
import styles from './HomePageOne.module.css';

const HomePageOne: React.FC = () =>
  <div className={styles.container}>
    <div className={styles.header}>
      <Logo />
      <Authorization />
    </div>
    <div className={styles.main}>
      <Illustrations />
      <div className={styles.content}>
        <p>Выиграйте <span className={styles.sum}>100 000 ₽</span></p>
        <p>на развитие</p>
        <p>своего таланта</p>
      </div>
    </div>
    <div className={styles.footer}>
      <Registration />
      <Social />
    </div>
  </div>;

export default HomePageOne;
