import React, { useCallback } from 'react';
import styles from './Button.module.css';

type ButtonType = {
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const Button: React.FC<ButtonType> = ({ children, className, onClick, type = 'button', disabled = false }) => {
  const onClickButton = useCallback((e) => {
    e.preventDefault();
    onClick();
  }, [onClick]);
  
  return (
    <button
      type={type}
      onClick={onClickButton}
      className={`${styles.button} ${className ? className : ''} ${disabled ? styles.disabledButton : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
