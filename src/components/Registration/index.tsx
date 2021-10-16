import React, { useCallback } from 'react';
import Button from '../common/Button';

type RegistrationType = {
  classNames: string;
}

const Registration: React.FC<RegistrationType> = ({ classNames }) => {
  const openRegistrationPage = useCallback(() => console.log('openRegistrationPage')
    , [])

  return (
    <Button onClick={openRegistrationPage} className={classNames} >
      Зарегистрироваться
    </Button>
  )
}

export default Registration;
