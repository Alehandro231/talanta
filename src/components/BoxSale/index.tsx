import React, { useState, useCallback } from "react";
import styles from "./BoxSale.module.css";
import boxImgSale from '../../public/box_sale.png';

type BoxSaleType = {
    onClick: (id: string, isSelected: boolean) => void;
    isOnSelected: boolean;
    id: string;
}

const BoxSale: React.FC<BoxSaleType> = ({
    onClick,
    isOnSelected,
    id,
}) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const onClickCategory = useCallback(() => {
        console.log(isOnSelected);
        // console.log(isSelected);
        
        if (!isOnSelected && !isSelected) {
            return;
        }
        setIsSelected(!isSelected);
        onClick(id, !isSelected);
    }, [isOnSelected, isSelected, onClick, id]);

    // return <div onClick={onClickCategory} className={`${isSelected ? styles.categories_active : styles.categories_passive}`}>{name}</div>

    return <div onClick={onClickCategory} className={`${isSelected ? styles.boxSale_active : styles.boxSale_passive}`}>
    <div className={styles.boxSaleBox}>
        <img className={styles.imgBoxSale} src={boxImgSale} alt="percentages" />
        <p className={styles.opisBoxSale}>Скидка 15%</p>
        <p className={styles.opisBoxSale}>на&nbsp;все&nbsp;товары</p>
    </div>
</div>}
    
    // {[1, 2, 3].map(() => <div className={styles.boxSale_passive}>
    //             <div className={styles.boxSaleBox}>
    //                 <img className={styles.imgBoxSale} src={boxImgSale} alt="percentages" />
    //                 <p className={styles.opisBoxSale}>Скидка 15%</p>
    //                 <p className={styles.opisBoxSale}>на&nbsp;все&nbsp;товары</p>
    //             </div>

    //         </div>)}

export default BoxSale;