import React, { useCallback } from 'react';
import { changePage } from '../../lib/change-page';
import { HOME_ROUTE } from '../../lib/constants';
import logoImg from '../../public/Logo.svg';
import logoImgMobile from '../../public/LogoMobile.svg';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  const onClickLogo = useCallback(() => changePage(HOME_ROUTE), []);

  return <>
    <img onClick={onClickLogo} className={styles.logoDesctop} src={logoImg} alt='logo' />
    <img onClick={onClickLogo} className={styles.logoMobile} src={logoImgMobile} alt='logo' />
  </>
}
  

export default Logo;
