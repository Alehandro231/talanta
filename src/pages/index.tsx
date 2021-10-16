import React, { useState, useCallback } from 'react';
import AuthorizationModal from '../components/AuthorizationModal';
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
    <div className={styles.container}>
      {isShowModal && <AuthorizationModal closeModal={closeModalHandler} />}
      <main className={styles.main}>
        <button onClick={handleAuthorizationClick}>Вход</button>
      </main>
    </div>
  );
};

export default Home;
