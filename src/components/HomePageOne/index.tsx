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
        <p>Система поощрения талантов</p>
      </div>
    </div>
    <div className={styles.footer}>
      <Registration classNames={styles.registrationButton} />
      <Social />
    </div>
  </div>;

export default HomePageOne;
