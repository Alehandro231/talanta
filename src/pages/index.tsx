import React from 'react';
import HomePageOne from '../components/HomePageOne';
import HomePageTwo from '../components/HomePageTwo';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <HomePageOne />
      <HomePageTwo />
    </div>
  );
};

export default Home;
