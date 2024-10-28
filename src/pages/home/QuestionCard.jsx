import React from "react";
import styles from './home.module.css'; // Make sure to import the styles

const QuestionCard = ({ id, question, answer, showingTitle, toggleParticular }) => {
    return (
      <div className={styles.labelQuests}>
        <div onClick={() => toggleParticular(id)} className={styles.question}>
          {question}
        </div>
        <span onClick={() => toggleParticular(id)} className={styles.arrow}>
          ⮟
        </span>
        {showingTitle === id && <div className={styles.answers}>{answer}</div>}
      </div>
    );
};

export default QuestionCard;