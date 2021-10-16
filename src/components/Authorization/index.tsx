import React, { useCallback } from 'react';
import Button from '../../components/common/Button';

const Authorization: React.FC = () => {
  const openAuthorizationPage = useCallback(
    () => console.log('openAuthorizationPage'),
    []
  );

  return (
    <Button onClick={openAuthorizationPage}>
      Войти
    </Button>
  );
};

export default Authorization;
