import React from 'react';
import { useTranslation } from "react-i18next";
import "./Questions.scss"

const Questions = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = React.useState([]);
  const questionList = [
    { id: "1", question: `${t('question.1')}`, answer: `${t('answer.1')}` },
    { id: "2", question: `${t('question.2')}`, answer: `${t('answer.2')}` },
    { id: "3", question: `${t('question.3')}`, answer: `${t('answer.3')}` },
    { id: "4", question: `${t('question.4')}`, answer: `${t('answer.4')}` },
    { id: "5", question: `${t('question.5')}`, answer: `${t('answer.5')}` },
    { id: "6", question: `${t('question.6')}`, answer: `${t('answer.6')}` },
    { id: "7", question: `${t('question.7')}`, answer: `${t('answer.7')}` },
  ]
  const toggleItem = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };
  return (
    <div className='questions'>
      <div className="container">
        <div className="questions__wrap">
          <div className="questions__title">
            <h2 className="title-two">{t('question.title')}</h2>
          </div>
          <div className="question">
            <ul className="question__list">
              {questionList.map((item)=> (<li key={item.id} className="question__item">
                <button onClick={() => toggleItem(item.id)} className={`question__btn ${openItems.includes(item.id) ? "question__btn--open" : ""}`}>{item.question}</button>
                {openItems.includes(item.id) && (
                  <div key={item.toString()} className={`question__answer  ${openItems.includes(item.id)  ? "active" : ""}`}>{item.answer}</div>
                )}
              </li>))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;

