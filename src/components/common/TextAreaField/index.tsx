import React, { useCallback } from 'react';
import styles from './TextAreaField.module.css';

type TextAreaFieldType = {
  name?: string;
  placeholder?: string;
  onChange?: (name: string, value: string) => void;
};

const TextAreaField: React.FC<TextAreaFieldType> = ({
  name = '',
  onChange,
  placeholder = '',
}) => {
  const onChangeTextAreaField = useCallback(
    (e) => {
      onChange && onChange(name, e.target.value);
    },
    [name, onChange]
  );

  return (
    <textarea
      className={styles.TextArea}
      cols={30}
      placeholder={placeholder}
      onChange={onChangeTextAreaField}
    ></textarea>
  );
};

export default TextAreaField;
