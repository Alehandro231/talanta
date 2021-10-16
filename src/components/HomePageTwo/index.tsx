import React from "react";
import Registration from "../Registration";
import userImgDesctop from '../../public/UserDesctop.svg';
import userImgTablet from '../../public/UserTablet.svg';
import userImgMobile from '../../public/UserMobile.svg';
import starImgDesctop from '../../public/StarDesctop.svg';
import starImgTablet from '../../public/StarTablet.svg';
import starImgMobile from '../../public/StarMobile.svg';
import percentagesImgDesctop from '../../public/PercentagesDesctop.svg';
import percentagesImgTablet from '../../public/PercentagesTablet.svg';
import percentagesImgMobile from '../../public/PercentagesMobile.svg';
import calendarImgDesctop from '../../public/CalendarDesctop.svg';
import calendarImgTablet from '../../public/CalendarTablet.svg';
import calendarImgMobile from '../../public/CalendarMobile.svg';
import arrowRightImg from '../../public/ArrowRight.svg';
import textListImg from '../../public/TextList.svg';
import styles from './HomePageTwo.module.css';

const HomePageTwo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Каждый человек талантлив и нам важно, чтобы вы имели возможность развиваться и расти в том, что нравится именно вам
        </p>
        <p>
          Расскажите про себя, система сама подскажет интересные вам мероприятия и подготовит персональные бонусные предложения и скидки
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.card}>
          <div>
          <img className={styles.imgDesctop} src={userImgDesctop} alt="user" />
          <img className={styles.imgTablet} src={userImgTablet} alt="user" />
          <img className={styles.imgMobile} src={userImgMobile} alt="user" />
            <p><span>1.</span>Зарегистрируйтесь на сайте</p>
          </div>
          <img className={styles.arrowCard} src={arrowRightImg} alt="arrow-right" />
        </div>
        <div className={styles.card}>
          <div>
          <img className={styles.imgDesctop} src={starImgDesctop} alt="star" />
          <img className={styles.imgTablet} src={starImgTablet} alt="star" />
          <img className={styles.imgMobile} src={starImgMobile} alt="star" />
            <p><span>2.</span>Расскажите про себя</p>
          </div>
          <img className={styles.arrowCard} src={arrowRightImg} alt="arrow-right" />
        </div>
        <div className={styles.card}>
          <div>
            <img className={styles.imgDesctop} src={percentagesImgDesctop} alt="percentages" />
            <img className={styles.imgTablet} src={percentagesImgTablet} alt="percentages" />
            <img className={styles.imgMobile} src={percentagesImgMobile} alt="percentages" />
            <p><span>3.</span>Получайте предложения</p>
          </div>
          <img className={styles.arrowCard} src={arrowRightImg} alt="arrow-right" />
        </div>
        <div className={styles.card}>
          <div>
            <img className={styles.imgDesctop} src={calendarImgDesctop} alt="calendar" />
            <img className={styles.imgTablet} src={calendarImgTablet} alt="calendar" />
            <img className={styles.imgMobile} src={calendarImgMobile} alt="calendar" />
            <p><span>4.</span>Участвуйте в мероприятиях</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.illustrations} >
          <img src={textListImg} alt="text-list" />
        </div>
        <div className={styles.info} >
          <div>
            <span>© 2021 #hackyanao</span>
            <span>Условия конкурса</span>
          </div>
          <div>our_command_name</div>
        </div>
      </div>
      <div className={styles.registrationButtonContainer}>
        <Registration classNames={styles.registrationButton} />
      </div>
    </div>
  );
};

export default HomePageTwo;
