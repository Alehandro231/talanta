import React, { useCallback } from 'react';
import Button from '../../components/common/Button';
import { changePage } from '../../lib/change-page';
import { AUTHORIZATION_ROUTE } from '../../lib/constants';

const Authorization: React.FC = () => {
  const openAuthorizationPage = useCallback(
    () => changePage(AUTHORIZATION_ROUTE),
    []
  );

  return (
    <Button onClick={openAuthorizationPage}>
      Войти
    </Button>
  );
};

export default Authorization;
