import React, { useCallback, useState } from 'react';
import Button from '../../components/common/Button';
import InputField from '../../components/common/InputField';
import Logo from '../../components/Logo';
import { changePage } from '../../lib/change-page';
import { AUTHORIZATION_ROUTE } from '../../lib/constants';
import Registry from '../../public/Registry.png';
import styles from './Registration.module.css';

const Registration: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [dateBirth, setDateBirth] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const openLoginFormHandler = useCallback(() => changePage(AUTHORIZATION_ROUTE), []);
  const onSubmitForm = useCallback(() =>
    console.log('submit')
  , []);

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <img src={Registry} alt="registryImage" />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.header}>
          <Logo />
        </div>
        <div className={styles.contentForm}>
          <div className={styles.heading}>
            Регистрация
          </div>
          <div className={styles.authorization}>
            Уже есть профиль? <Button onClick={openLoginFormHandler} className={styles.authorizationButton}>Войдите</Button>
          </div>
          <form>
            <InputField
              placeholder='ФИО'
              value={userName}
              onChange={(val) => setUserName(val)}
            />
            <InputField
              placeholder='Город'
              value={city}
              onChange={(val) => setCity(val)}
            />
            <InputField
              placeholder='Дата рождения'
              value={dateBirth}
              onChange={(val) => setDateBirth(val)}
            />
            <InputField
              placeholder='Электронная почта'
              value={email}
              type='email'
              pattern={"/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"}
              onChange={(val) => setEmail(val)}
            />            
            <InputField
              placeholder='Пароль'
              value={password}
              type='password'
              onChange={(val) => setPassword(val)}
            />
            <div className={styles.accessAgreement}>
              Нажимая «Зарегистрироваться» вы принимаете
                <a href="">условия пользовательского соглашения</a>
            </div>
            <div className={styles.registrationButtonContainer}>
              <Button onClick={onSubmitForm} type='submit' className={styles.registrationButton} >Зарегистрироваться</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration;
