import React, { useState, useCallback } from 'react';
import HomePageOne from '../components/HomePageOne';
import HomePageTwo from '../components/HomePageTwo';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState(Boolean);

  const handleAuthorizationClick = useCallback(() => setIsShowModal(true), [
    setIsShowModal,
  ]);
  const closeModalHandler = useCallback(() => setIsShowModal(false), [
    setIsShowModal,
  ]);

  return (
    <div className={styles.page}>
      <HomePageOne />
      <HomePageTwo />
    </div>
  );
};

export default Home;
