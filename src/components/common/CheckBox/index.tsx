import React, { useCallback, useState } from 'react';
import CheckBoxSelected from './CheckBoxSelected.svg';
import CheckBoxNoSelected from './CheckBoxNoSelected.svg';
import styles from './CheckBox.module.css';

type CheckBoxType = {
  text: string;
  onChange?: (name: string, isSelected: boolean) => void;
}

const CheckBox: React.FC<CheckBoxType> = ({ text, onChange }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const onClickCheckBox = useCallback(() => {
    setIsSelected(!isSelected);
    onChange && onChange(text, !isSelected);
  }, [isSelected, onChange, text]);

  return (
    <div className={styles.checkboxContainer} onClick={onClickCheckBox}>
      <img src={isSelected ? CheckBoxSelected : CheckBoxNoSelected} alt="checkbox" />
      <span>{text}</span>
    </div>
  )
}

export default CheckBox;