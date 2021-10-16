import React, { useCallback } from 'react';
import { changePage } from '../../lib/change-page';
import { REGISTRATION_ROUTE } from '../../lib/constants';
import Button from '../common/Button';

type RegistrationType = {
  classNames: string;
}

const Registration: React.FC<RegistrationType> = ({ classNames }) => {
  const openRegistrationPage = useCallback(() =>
    changePage(REGISTRATION_ROUTE)
    , [])

  return (
    <Button onClick={openRegistrationPage} className={classNames} >
      Зарегистрироваться
    </Button>
  )
}

export default Registration;
