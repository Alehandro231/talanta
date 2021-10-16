import React, { useCallback } from 'react';
import Button from '../common/Button';
import style from './Registration.module.css';

const Registration: React.FC = () => {
  const openRegistrationPage = useCallback(() => console.log('openRegistrationPage')
    , [])

  return (
    <Button onClick={openRegistrationPage} className={style.button} >
      Зарегистрироваться
    </Button>
  )
}

export default Registration;
