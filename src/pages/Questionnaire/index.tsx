import React, { useCallback, useState } from 'react';
import Button from '../../components/common/Button';
import Logo from '../../components/Logo';
import Question from '../../components/Question';
import { changePage } from '../../lib/change-page';
import { ACCOUNT_ROUTE } from '../../lib/constants';
import styles from './Questionnaire.module.css';

const questionnaires = [
  {
    "eventCategory": "Программирование",
    "questions": [
      {
        "name": "Вы интересуетесь этой темой или серьезно занимаетесь?",
        "type": "checkbox",
        "answers": [
          "Серьезно занимаюсь",
          "Больше развлекаюсь",
          "Нечто среднее"
        ]
      },
      {
        "name": "Скидки и бонусы какого рода Вам были бы интересны",
        "type": "checkbox",
        "answers": [
          "Обучающие курсы",
          "Скидки на оборудование"
        ]
      },
      {
        "name": "Что Вы думаете о развитии программирования в ЯНАО? Что можно сделать лучше? Как поддержать программистов?",
        "type": "textarea",
        "answers": [
          "Развит слабее, чем в крупных городах. Чаще организовывать соревнования, собирать команды и отправлять на большие соревнования. Нужны кружки в школе"
        ]
      }
    ]
  },
  {
    "eventCategory": "Киберспорт",
    "questions": [
      {
        "name": "Вы интересуетесь этой темой или серьезно занимаетесь?",
        "type": "textarea",
        "answers": [
          "Серьезно занимаюсь",
          "Больше развлекаюсь",
          "Нечто среднее"
        ]
      },
      {
        "name": "Скидки и бонусы какого рода Вам были бы интересны",
        "type": "checkbox",
        "answers": [
          "Обучающие курсы",
          "Скидки на оборудование"
        ]
      },
      {
        "name": "Что Вы думаете о развитии киберспорта в ЯНАО? Что можно сделать лучше? Как поддержать киберспортсменов?",
        "type": "checkbox",
        "answers": [
          "Мало развит, люди мало что о нем знают. Собрать кружки и чаще рассказывать об этом"
        ]
      }
    ]
  }
]
//   [
//   {
//     eventCategory: 'Киберспорт',
//     questions: [
//       {
//         name: 'вопрос',
//         type: 'checkbox',
//         answers: ['вопрос1', 'вопрос2', 'вопрос3']
//       },
//       {
//         name: 'вопрос',
//         type: 'textarea',
//         answers: []
//       }
//     ]
//   },
//   {
//     eventCategory: 'Музыка',
//     questions: [
//       {
//         name: 'вопрос',
//         type: 'checkbox',
//         answers: ['вопрос1', 'вопрос2', 'вопрос3']
//       },
//       {
//         name: 'вопрос',
//         type: 'textarea',
//         answers: []
//       }
//     ]
//   }
// ]

const Questionnaire: React.FC = () => {
  const [questionnaireData, setQuestionnaireData] = useState<any>([])
  const nextStep = useCallback(() => {
    changePage(ACCOUNT_ROUTE);
  }, []);

  const onChangeQuestion = useCallback((categoryName: string) => (questionName: string) => (answerName: string, data: string | boolean) => {
    // if (!questionnaireData[categoryName]) {
    //   questionnaireData[categoryName] = {
    //     [questionName]: (typeof data === 'boolean' ? [] : ''),
    //   }
    // }
    // if (typeof data === 'boolean') {
    //   if (data === true) {
    //     questionnaireData[categoryName][questionName].push(answerName)
    //   } else {
    //     questionnaireData[categoryName][questionName] =
    //       questionnaireData[categoryName][questionName].filter((name: any) => name !== answerName)
    //   }
    // } else {
    //   questionnaireData[categoryName][questionName] = data;
    // }

    setQuestionnaireData(questionnaireData);
  }, [questionnaireData, setQuestionnaireData]);

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.head}>
        Ответьте на несколько вопросов о выбранных категориях
      </div>
      <div className={styles.main}>
        {questionnaires.map((question) => {
          const { eventCategory, questions } = question;

          return (
            <>
              <div className={styles.categoryName}>{eventCategory}</div>
              {questions.map((question, index) => {
                const { name, type, answers } = question
                return (
                  <Question
                    questionNumber={index + 1}
                    headerText={name}
                    type={type}
                    answers={answers}
                    showHr={index !== questions.length - 1}
                    onChange={onChangeQuestion(eventCategory)}
                  />
                )
              })}
            </>
          )
        })}
      </div>
      <div className={styles.footer}>
        <Button onClick={nextStep} className={styles.button}>Готово</Button>
      </div>
    </div>
  )
}

export default Questionnaire;
