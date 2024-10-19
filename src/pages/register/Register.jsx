import styles from './register.module.css';
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from 'react-icons/bs';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [university, setUniversity] = useState(null);
	const [age, setAge] = useState(null);
	const [number, setNumber] = useState(null);
	const [altNumber, setAltNumber] = useState(null);
	const [email, setEmail] = useState(null);
	const [altEmail, setAltEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [cnfPassword, setCnfPassword] = useState(null);
	

	return(
		<div className={styles.example}>
			<div className={styles.container}>
				<div className={styles.form}>
					<form action='#'>
						<div className={styles.row} style={{margin: "3vh 0 auto"}}>
							<div className={styles.column}>
								<label htmlFor="First-Name">First Name*</label>
								<input className={styles.ip} type="text" placeholder='Rage' value={firstName} onChange={e => setFirstName(e.target.value)} required />
							</div>
							<div className={styles.column}>
								<label htmlFor="Last-Name">Last Name*</label>
								<input className={styles.ip} type="text" placeholder='Titan' value={lastName} onChange={e => setLastName(e.target.value)} required />
							</div>
						</div>
						<div className={styles.row}>
							<div className={styles.column}>
								<label htmlFor="university">University/College/School*</label>
								<input className={styles.ip} type="text" placeholder='IIT Guwahati' value={university} onChange={e => setUniversity(e.target.value)} required />
							</div>
							<div className={styles.column}>
								<label htmlFor="Age">Age*</label>
								<input className={styles.ip} type="number" placeholder='23' value={age} onChange={e => setAge(e.target.value)} required />
							</div>
						</div>
						<div className={styles.row}>
							<div className={styles.column}>
								<label htmlFor="number">Phone Number*</label>
								<input className={styles.ip} type="number" placeholder='9876543210' value={number} onChange={e => setNumber(e.target.value)} required />
							</div>
							<div className={styles.column}>
								<label htmlFor="altNumber">Alternate Number</label>
								<input className={styles.ip} type="number" placeholder='9876543210' value={altNumber} onChange={e => setAltNumber(e.target.value)} />
							</div>
						</div>
						<div className={styles.row}>
							<div className={styles.column}>
								<label htmlFor="number">Personal Email*</label>
								<input className={styles.ip} type="text" placeholder='abc@gmail.com' value={email} onChange={e => setEmail(e.target.value)} required />
							</div>
							<div className={styles.column}>
								<label htmlFor="altEmail">Alternate Email</label>
								<input className={styles.ip} type="text" placeholder='abc@iitg.ac.in' value={altEmail} onChange={e => setAltEmail(e.target.value)} />
							</div>
						</div>
						<div className={styles.row}>
							<div className={styles.column}>
								<label htmlFor="number">Password*</label>
								<input className={styles.ip} type="password" placeholder='******' value={password} onChange={e => setPassword(e.target.value)} required />
							</div>
							<div className={styles.column}>
								<label htmlFor="password">Confirm Password*</label>
								<input className={styles.ip} type="password" placeholder='******' value={cnfPassword} onChange={e => setCnfPassword(e.target.value)} required />
							</div>
						</div>
						<button className={styles.signUp} onClick={() => {}}>Sign-Up</button>
						<div className={styles.or}>
							<hr />
							<p style={{ position: "relative", top: "-18px", verticalAlign: "middle" }}>or</p>
							<hr />
						</div>
					</form>
					<button className={styles.google_login} onClick={() => {}}> <FcGoogle style={{width: "20px", height: "17px", position: "relative", top: "-1px"}}/>  Continue With Google </button>
					<button className={styles.google_login} onClick={() => {}}> <BsMicrosoft style={{width: "15px", height: '17px', marginRight: "2px", position: "relative", top: "-1px"}}/> Continue with Microsoft </button>
					<Link to="/login" className={styles.loginLink} style={{color: "#1f2024"}}></Link>
				</div>
			</div>
		</div>
	);
}

export default Register;