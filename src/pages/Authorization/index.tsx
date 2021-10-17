import React, { useCallback, useState } from 'react';
import Button from '../../components/common/Button';
import InputField from '../../components/common/InputField';
import Logo from '../../components/Logo';
import { changePage } from '../../lib/change-page';
import { ACCOUNT_ROUTE, ADMIN_DATA, ADMIN_ROUTE, RECOVER_PASSWORD, REGISTRATION_ROUTE } from '../../lib/constants';
import AuthorizationImg from '../../public/Authorization.png';
import styles from './Authorization.module.css';

const Authorization: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const openRegistrationFormHandler = useCallback(
    () => changePage(REGISTRATION_ROUTE),
    []
  );
  // const openRecoverPasswordFormHandler = useCallback(
  //   () => changePage(RECOVER_PASSWORD),
  //   []
  // );
  const onSubmitForm = useCallback(() => {
    if (login && password) {
      if (login === ADMIN_DATA.login && password === ADMIN_DATA.password) {
        changePage(ADMIN_ROUTE);
      } else {
        changePage(ACCOUNT_ROUTE);
      }
    }
  }, [login, password]);

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
            {/* <div className={styles.recoveryPassword}>
              <Button
                onClick={openRecoverPasswordFormHandler}
                className={styles.registrationButton}
              >
                Восстановить пароль
              </Button>
            </div> */}
            <div className={styles.authorizationButtonContainer}>
              <Button
                onClick={onSubmitForm}
                type="submit"
                className={styles.authorizationButton}
                disabled={!login || !password}
              >
                Войти
              </Button>
            </div>
          </form>
          <div className={styles.info}>
            <p>Проблемы со входом?</p>
            <p>Напишите на <a href="mailto:support@talanta-yamal.ru">support@talanta-yamal.ru</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
