// import React, { useState } from 'react';
// import styles from './login.module.css';
// import { FcGoogle } from "react-icons/fc";
// import { BsMicrosoft } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// const Login = () => {

// 	// send to backend
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');

// 	return (
// 		<div className={styles.example}>
// 			<div className={styles.container}>
// 				<div className={styles.form}>
// 					<form action="#">
// 						<label htmlFor="Primary_email">Primary Email</label>
// 						<br />
// 						<input className={styles.ip} type="email" placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
// 						<br />
// 						<label htmlFor="Password">Password</label>
// 						<br />
// 						<input className={styles.ip} type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
// 						<br />
// 						<button className={styles.login} onClick={() => {}}>Log-in</button>
// 						<br />
// 						<a href="#" style={{color: "#1f2024", padding: "1% auto"}}>Forgot Password?</a> {/* modify link to enable password reset mechanism */}
// 						<div className={styles.or}>
// 							<hr />
// 							<p>or</p>
// 							<hr />
// 						</div>
// 					</form>
// 					<button className={styles.google_login} onClick={() => {}}> <FcGoogle style={{width: "20px", height: "17px"}}/>  Continue With Google </button>
// 					<button className={styles.google_login} onClick={() => {}} style={{margin: "3% auto 1%"}}> <BsMicrosoft style={{width: "15px", height: '17px', marginRight: "2px"}}/> Continue with Microsoft </button>
// 					<Link to="/register" className={styles.registerLink} style={{color: "#1f2024"}}></Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Login;


import React, { useState } from 'react';
import styles from './login.module.css';
import { FcGoogle } from "react-icons/fc";
import { BsBorder, BsMicrosoft } from 'react-icons/bs';
// import { Link, useNavigate } from 'react-router-dom';
// import Register from '../register/Register';
// import Popup from 'reactjs-popup';
import { MdScale } from 'react-icons/md';

const Login = ({setRegistering,setLogging}) => {
	// const navigate=useNavigate();

	// send to backend
	const register=()=>{
		setRegistering(true)
		setLogging(false)
	}
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<div className={styles.example}>
				<div className={styles.container}>
					<div className={styles.form}>
						<form action="#">
							<label htmlFor="Primary_email">Primary Email</label>
							<br />
							<input className={styles.ip} type="email" placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
							<br />
							<label htmlFor="Password">Password</label>
							<br />
							<input className={styles.ip} type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
							<br />
							<button className={styles.login} onClick={() => { }}>Log-in</button>
							<br />
							<a href="#" style={{ color: "#1f2024", padding: "1% auto" }}>Forgot Password?</a> {/* modify link to enable password reset mechanism */}
							<div className={styles.or}>
								<hr />
								<p>or</p>
								<hr />
							</div>
						</form>
						<button className={styles.google_login} onClick={() => { }}> <FcGoogle style={{ width: "20px", height: "17px" }} />  Continue With Google </button>
						<button className={styles.google_login} onClick={() => { }} style={{ margin: "3% auto 1%" }}> <BsMicrosoft style={{ width: "15px", height: '17px', marginRight: "2px" }} /> Continue with Microsoft </button>
						{/* <Link to="/register" className={styles.registerLink} style={{color: "#1f2024"}}></Link> */}
						{/* <button className={styles.registerLink2}>Don't have an account?</button> */}
						<button onClick={register} className={styles.registerLink2}> Don't have an account? </button>
						<div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;