import React, { useState, useCallback } from "react";
import styles from "./CategoryInteres.module.css"

type CategoryInteresType = {
    name: string;
    onClick: (id: string, isSelected: boolean) => void;
    id: string;
}

const CategoryInteres: React.FC<CategoryInteresType> = ({ name, onClick, id }) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const onClickCategory = useCallback(() => {
        setIsSelected(!isSelected);
        onClick(id, !isSelected);
    }, [isSelected, onClick, id]);

    return <div onClick={onClickCategory} className={`${isSelected ? styles.categories_active : styles.categories_passive}`}>{name}</div>
}

export default CategoryInteres;