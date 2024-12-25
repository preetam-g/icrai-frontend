import styles from './register.module.css';
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from 'react-icons/bs';
import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

const Register = ({setLogging,setRegistering}) => {
	// const navigate=useNavigate();

	// backend
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

	const loginPage=()=>{
		setRegistering(false)
		setLogging(true)
	}

	return (
		// <div className={styles.register}
		// style={{
		// 	display:"flex",
		// 	flexDirection:"column",
		// 	justifyContent: "center",
		// 	alignItems: "center",
		// 	background: "#a4a8ab",
		// 	padding: "10px 0px 20px 0px",
		// 	borderRadius: "15px"}}
		// >
		<div className={styles.register}>
			<div className={styles.container}>
				<div className={styles.form}>
					<form action='#'>
						<div className={styles.row} style={{ margin: "3vh 0 auto" }}>
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
						<button className={styles.signUp} onClick={() => { }}>Sign-Up</button>
						<div className={styles.or}>
							<hr />
							<p>or</p>
							<hr />
						</div>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<button className={styles.google_login} onClick={() => { }}> <FcGoogle style={{ width: "20px", height: "17px", position: "relative", top: "-1px" }} />  Continue With Google </button>
							<button className={styles.google_login} onClick={() => { }}> <BsMicrosoft style={{ width: "15px", height: '17px', marginRight: "2px", position: "relative", top: "-1px" }} /> Continue with Microsoft </button>
							{/* <Link to="/login" className={styles.loginLink} style={{ color: "#1f2024" }}></Link> */}
							{/* <Link to="/login" className={styles.loginLink}>Already have an Account?</Link> */}
						</div>
					</form>
					<button onClick={loginPage} className={styles.registerLink2}> Already have an Account </button>
				</div>
			</div>
		</div>
	);
}

export default Register;