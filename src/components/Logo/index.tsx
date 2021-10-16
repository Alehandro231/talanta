import React from 'react';
import logoImg from '../../public/Logo.svg';
import logoImgMobile from '../../public/LogoMobile.svg';
import styles from './Logo.module.css';

const Logo: React.FC = () =>
  <>
    <img className={styles.logoDesctop} src={logoImg} alt='logo' />
    <img className={styles.logoMobile} src={logoImgMobile} alt='logo' />
  </>

export default Logo;
