import React, { useCallback, useState } from 'react';
import Button from '../../components/common/Button';
import InputField from '../../components/common/InputField';
import Logo from '../../components/Logo';
import { changePage } from '../../lib/change-page';
import { RECOVER_PASSWORD, REGISTRATION_ROUTE } from '../../lib/constants';
import AuthorizationImg from '../../public/Authorization.png';
import styles from './Authorization.module.css';

const Authorization: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const openRegistrationFormHandler = useCallback(
    () => changePage(REGISTRATION_ROUTE),
    []
  );
  const openRecoverPasswordFormHandler = useCallback(
    () => changePage(RECOVER_PASSWORD),
    []
  );
  const onSubmitForm = useCallback(() => console.log('submit'), []);

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <img src={AuthorizationImg} alt="registryImage" />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.header}>
          <Logo />
        </div>
        <div className={styles.contentForm}>
          <div className={styles.heading}>Вход</div>
          <div className={styles.registration}>
            Еще нет профиля?{' '}
            <Button
              onClick={openRegistrationFormHandler}
              className={styles.registrationButton}
            >
              Зарегистрируйтесь
            </Button>
          </div>
          <form>
            <InputField
              placeholder="Логин"
              value={login}
              onChange={(val) => setLogin(val)}
            />
            <InputField
              placeholder="Пароль"
              value={password}
              type="password"
              onChange={(val) => setPassword(val)}
            />
            <div className={styles.recoveryPassword}>
              <Button
                onClick={openRecoverPasswordFormHandler}
                className={styles.registrationButton}
              >
                Восстановить пароль
              </Button>
            </div>
            <div className={styles.authorizationButtonContainer}>
              <Button
                onClick={onSubmitForm}
                type="submit"
                className={styles.authorizationButton}
              >
                Зарегистрироваться
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
