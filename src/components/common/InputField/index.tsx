import React, { useCallback } from "react";
import styles from './InputField.module.css';

type InputFieldType = {
  value: string;
  placeholder?: string;
  onChange?: (val: string) => void;
  type?: string;
  pattern?: string;
}

const InputField: React.FC<InputFieldType> = ({
  value,
  placeholder,
  onChange,
  type = 'text',
  pattern = '',
}) => {
  const onChangeInputField = useCallback((e) => {    
    onChange && onChange(e.target.value);
  }, [onChange])
  return <input
    value={value}
    className={styles.inputStyle}
    placeholder={placeholder}
    type={type}
    pattern={pattern}
    onChange={onChangeInputField}
  />;
}

export default InputField;
