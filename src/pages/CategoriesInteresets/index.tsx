import React, { useCallback, useState } from 'react';
import CategoryInteres from '../../components/CategoryInteres';
import Button from '../../components/common/Button';
import Logo from '../../components/Logo';
import styles from './CategoriesInteresets.module.css';

const categories = [
  {
    id: 'programming',
    name: 'Программирование',
  },
  {
    id: 'cybersport',
    name: 'Киберспорт'
  },
  {
    id: 'desing',
    name: 'Дизайн'
  },
  {
    id: 'hockey',
    name: 'Хоккей'
  },
  {
    id: 'football',
    name: 'Футбол'
  },
  {
    id: 'maths',
    name: 'Математика'
  },
  {
    id: 'art',
    name: 'Искусство'
  },
  {
    id: 'streetart',
    name: 'Стритарт'
  },
  {
    id: 'poesy',
    name: 'Поэзия'
  },
  {
    id: 'english',
    name: 'Английский язык'
  },
  {
    id: 'volunteer',
    name: 'Волонтёрство'
  },
  {
    id: 'directing',
    name: 'Режиссура'
  },
  {
    id: 'gamedesign',
    name: 'Геймдизайн'
  },
  {
    id: 'music',
    name: 'Музыка'
  },
  {
    id: 'vocal',
    name: 'Вокал'
  },
]

const CategoriesInteresets: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onClickCategory = useCallback((id: string, isSelected: boolean) => {    
    if (isSelected && !selectedCategories.includes(id)) {
      const newSelectedCategories = [...selectedCategories, id];
      setSelectedCategories(newSelectedCategories);
    }
    if (!isSelected) {
      setSelectedCategories(selectedCategories.filter((categoryId) => categoryId !== id));
    }
  }, [selectedCategories, setSelectedCategories]);

  const nextStep = useCallback(() => {
    console.log(selectedCategories);
    
    if (!selectedCategories.length) {
      return;
    }
    console.log('next step');
    
  }, [selectedCategories]);

  return (
  <div>
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo />
      </div>
      <div className={styles.content}>
        <p>Чем вы увлекаетесь?</p>
        <p className={styles.description}>
        Выберите минимум один вариант. Категории можно будет поменять в личном кабинете
        </p>
        <div className={styles.categories}>
          {categories.map(({id, name}) => <CategoryInteres key={id} id={id} name={name} onClick={onClickCategory} />)}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={nextStep} className={styles.nextStepButton}>Далее</Button>
      </div>
    </div>
  </div>
  );
}

export default CategoriesInteresets;
