import { useState } from 'react';
import styles from './home.module.css'
import image from './image.png'
// import fontUrl from'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap'

const Home = () => {
	const [showingTitle,setTitle]=useState(-1)
	//for the showing and hiding of the questions and answers
	const question1 = {
		question: 'What is the difference between HTTP and HTTPS?',
		answer: 'HTTP (HyperText Transfer Protocol) is a protocol for transferring data over the web. HTTPS (HTTP Secure) adds a layer of security by encrypting the data, ensuring a secure connection using SSL/TLS.'
	};
	
	const question2 = {
		question: 'What does API stand for, and what is its purpose?',
		answer: 'API stands for Application Programming Interface. It allows different software applications to communicate with each other by defining a set of rules and protocols.'
	};
	
	const question3 = {
		question: 'What is cloud computing?',
		answer: 'Cloud computing is the delivery of computing services such as storage, servers, databases, networking, and software over the internet ("the cloud"), allowing users to access data remotely.'
	};
	
	const question4 = {
		question: 'What is the main difference between RAM and ROM?',
		answer: 'RAM (Random Access Memory) is a type of volatile memory that is used to store data temporarily while the system is running. ROM (Read-Only Memory) is non-volatile and stores permanent instructions for the system, like firmware.'
	};
	
	const question5 = {
		question: 'What is Git, and why is it used?',
		answer: 'Git is a distributed version control system used for tracking changes in source code during software development. It allows multiple developers to work on a project simultaneously, tracking changes and facilitating collaboration.'
	};
	
	const question6 = {
		question: 'What is machine learning?',
		answer: 'Machine learning is a subset of artificial intelligence (AI) that involves the use of algorithms and statistical models to enable computers to learn from data and make decisions without being explicitly programmed.'
	};
	
	const question7 = {
		question: 'What is 5G technology, and how does it differ from 4G?',
		answer: '5G is the fifth generation of mobile network technology, offering faster data speeds, lower latency, and higher capacity compared to 4G. It enables more reliable and efficient communication for IoT devices and faster mobile internet experiences.'
	};

	const question8= {
		question: 'What is 5G technology, and how does it differ from 4G?',
		answer: '5G is the fifth generation of mobile network technology, offering faster data speeds, lower latency, and higher capacity compared to 4G. It enables more reliable and efficient communication for IoT devices and faster mobile internet experiences.'
	};
	
	const toggleParticular=(num)=>{
		if(showingTitle!=num){
		setTitle(num)}else{
			setTitle(-1)
		}
	}

	return(
		<div className={styles.homePage}>
			<div className={styles.headerContainer}>
				<h1 className={styles.header}>Robotics Competition 2024-2025</h1>
			</div>
			<div className={styles.homeItems}>
			<div className={styles.logoContainer}>
				<img className={styles.robot} src={image}>
				</img>
			</div>
			<div className={styles.formContainer}>
				<div className={styles.forms}>

					<div className={styles.labelQuests}><div onClick={()=>{toggleParticular(1)}} className={styles.question}>{question1.question}</div> <span  onClick={()=>{toggleParticular(1)}} className={styles.arrow}>⮟</span>
					{showingTitle==1&&
					<div className={styles.answers}>{question1.answer}</div>
				}
					</div>

					<div className={styles.labelQuests}><div onClick={()=>{toggleParticular(2)}} className={styles.question}>{question2.question}</div> <span  onClick={()=>{toggleParticular(2)}} className={styles.arrow}>⮟</span>
					{showingTitle==2&&
					<div className={styles.answers}>{question2.answer}</div>
				}
					</div>

					<div className={styles.labelQuests}><div onClick={()=>{toggleParticular(3)}}  className={styles.question}>{question3.question}</div> <span  onClick={()=>{toggleParticular(3)}} className={styles.arrow}>⮟</span>
					{showingTitle==3&&
					<div className={styles.answers}>{question3.answer}</div>
				}
					</div>

					<div className={styles.labelQuests}><div onClick={()=>{toggleParticular(4)}} className={styles.question}>{question4.question}</div> <span  onClick={()=>{toggleParticular(4)}} className={styles.arrow}>⮟</span>
					{showingTitle==4&&
					<div className={styles.answers}>{question4.answer}</div>
				}
					</div>

					<div className={styles.labelQuests}><div onClick={()=>{toggleParticular(5)}} className={styles.question}>{question5.question}</div> <span  onClick={()=>{toggleParticular(5)}} className={styles.arrow}>⮟</span>
					{showingTitle==5&&
					<div className={styles.answers}>{question5.answer}</div>
				}
					</div>

					<div className={styles.labelQuests}><div onClick={()=>{toggleParticular(6)}} className={styles.question}>{question6.question}</div> <span  onClick={()=>{toggleParticular(6)}} className={styles.arrow}>⮟</span>
					{showingTitle==6&&
					<div className={styles.answers}>{question6.answer}</div>
				}
					</div>

					<div className={styles.labelQuests}><div onClick={()=>{toggleParticular(7)}} className={styles.question}>{question7.question}</div> <span  onClick={()=>{toggleParticular(7)}} className={styles.arrow}>⮟</span>
					{showingTitle==7&&
					<div className={styles.answers}>{question7.answer}</div>
				}
					</div>

					<div className={styles.labelQuests}><div onClick={()=>{toggleParticular(8)}} className={styles.question}>{question8.question}</div> <span  onClick={()=>{toggleParticular(8)}} className={styles.arrow}>⮟</span>
					{showingTitle==8&&
					<div className={styles.answers}>{question8.answer}</div>
				}
					</div>
					</div>
			</div>
			</div>
		</div>
	);
}

export default Home;