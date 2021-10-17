import React, { useCallback, useState } from 'react';
import styles from "./Account.module.css";
import Logo from '../../components/Logo';
import humanAccountImg from '../../public/human_account.svg';
import boxActivityElemImg from '../../public/boxactivityelem.png';
import BoxSale from '../../components/BoxSale';


const Account: React.FC = () => {
    const [selectedBoxSales, setSelectedBoxSales] = useState<boolean[]>([]);
    const onClickBoxSale = useCallback((id, isSelect) => {
        if (isSelect) {
            selectedBoxSales.push(true);
        } else {
            selectedBoxSales.pop();
        }        
        setSelectedBoxSales(selectedBoxSales);
    }, [selectedBoxSales, setSelectedBoxSales])
    return (
        <div>
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.header_left}>
                <Logo />
            </div>

            <div className={styles.header_right}>
                <img className={styles.imgHuman} src={humanAccountImg} alt="percentages" />
                <p className={styles.humanName}>Личный&nbsp;кабинет</p>
            </div>


        </div>
        <div className={styles.boxText}>
            <div className={styles.textInfo}>Персональные&nbsp;предложения</div>
            <div className={styles.textInfoCalendar}>Октябрь&nbsp;2021</div>
        </div>

        <div className={styles.box}>
            {/* {[1, 2, 3].map(() => <div className={styles.boxSale_active}>
                <div className={styles.boxSaleBox}>
                    <img className={styles.imgBoxSale} src={boxImgSale} alt="percentages" />
                    <p className={styles.opisBoxSale}>Скидка 15%</p>
                    <p className={styles.opisBoxSale}>на&nbsp;все&nbsp;товары</p>
                </div>
            </div>)}

            {[1, 2, 3].map(() => <div className={styles.boxSale_passive}>
                <div className={styles.boxSaleBox}>
                    <img className={styles.imgBoxSale} src={boxImgSale} alt="percentages" />
                    <p className={styles.opisBoxSale}>Скидка 15%</p>
                    <p className={styles.opisBoxSale}>на&nbsp;все&nbsp;товары</p>
                </div>

            </div>)} */}
            {
                [1,2,3,4,5,6].map((num, i) => <BoxSale key={num*i} id={`${num*i}`} onClick={onClickBoxSale} isOnSelected={selectedBoxSales.length <=3} />)
            }






        </div>
    </div>
    <div className={styles.containerFoter}>

        <div className={styles.boxActivity}>
            <div className={styles.boxActivityInfo}>Мероприятия</div>

            <div className={styles.boxActivityBox}>
                {[1, 2, 3, 4, 5, 6].map(() => <div className={styles.boxActivityBoxElem}>
                    <div className={styles.boxActivityBoxElem_boxImg}>
                        <img className={styles.boxActivityElemImg} src={boxActivityElemImg} alt="percentages" />
                    </div>

                    <div className={styles.boxActivityBoxElem_boxTxt}>
                        <div className={styles.nameElem}>
                            <p className={styles.nameElemName}>Мастер-класс</p>
                            <p className={styles.nameElemData}>24&nbsp;октября</p>
                        </div>
                        <div className={styles.listCat}>
                            <div className={styles.nameCat}>Киберспорт&nbsp;•&nbsp;Соревнования</div>
                        </div>


                    </div>

                </div>)}
            </div>
        </div>
    </div>




</div>
    )
}

export default Account;
