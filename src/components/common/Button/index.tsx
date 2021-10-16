import React from 'react';
import styles from './Button.module.css';

type ButtonType = {
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonType> = ({ children, className, onClick }) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${className ? className : ''}`}
  >
    {children}
  </button>
);

export default Button;
