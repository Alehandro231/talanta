import React from 'react';
import CheckBox from '../common/CheckBox';
import TextAreaField from '../common/TextAreaField';
import styles from './Question.module.css';

type QuestionType = {
  headerText: string;
  type: string;
  answers: string[];
  showHr?: boolean;
  questionNumber?: string | number;
  onChange: (categoryName: string) => (questionName: string) => (answerName: string, data: string | boolean) => void;
}

const Question: React.FC<QuestionType> = ({
  headerText,
  questionNumber,
  type,
  answers,
  showHr = true,
  onChange,
}) => {
  return (
    <div>
      <div className={styles.header}>
        {`${questionNumber ? `${questionNumber}. ` : ''}${headerText}`}
      </div>
      <div className={styles.answersContainer}>
        {type === 'checkbox' && answers.map((name, index) => {
          return <CheckBox onChange={onChange(headerText)} key={`${name}${index}`} text={name} />
        })}
        {type === 'textarea' &&
          <TextAreaField onChange={onChange(headerText)} name={headerText} placeholder='Напишите ответ...' />
        }
      </div>
      {showHr && <hr className={styles.hr} />}
    </div>
  )
};

export default Question;
