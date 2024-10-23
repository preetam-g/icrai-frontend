import { useState } from 'react';
import styles from './home.module.css'
import image from './image.png'
import QuestionCard from './QuestionCard';
import { questions } from '../../fakeDatabase.js'

const Home = () => {
  
  const [showingTitle, setShowingTitle] = useState(-1)
  
  const toggleParticular = (num) => {
    setShowingTitle(prevState => prevState !== num ? num : -1)
  }

  return(

    <div className={styles.homePage}>

      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Robotics Competition 2024-2025</h1>
      </div>

      <div className={styles.homeItems}>

        <div className={styles.logoContainer}>
          <img className={styles.robot} src={image} alt="Robot" />
        </div>

        <div className={styles.formContainer}>
          {/* <div>Hello there</div> */}
          <div className={styles.forms}>
            {questions.map((q, index) => (
              <QuestionCard
                key={index}
                id={index + 1}
                question={q.question}
                answer={q.answer}
                showingTitle={showingTitle}
                toggleParticular={toggleParticular}
              />
            ))}

          </div>
        </div>

      </div>

    </div>

  );
}

export default Home;