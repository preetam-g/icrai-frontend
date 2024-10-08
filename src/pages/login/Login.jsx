import React, { useState } from 'react';
import styles from './login.module.css'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className={styles.example}>
			<div className={styles.container}>
				<div className={styles.form}>
					<form action="#">
						<label htmlFor="Primary_email">Primary Email</label>
						<br />
						<input type="email" placeholder="Value" value={email} onChange={(e) => setEmail(e.target.value)} required/>
						<br />
						<label htmlFor="Password">Password</label>
						<br />
						<input type="password" placeholder="Value" value={password} onChange={(e) => setPassword(e.target.value)} required/>
						<br />
						<button className={styles.login}>Log-in</button>
						<br />
						<a href="#">Forgot Password?</a>
						<div className={styles.or}>
							<hr />
							<p style={{ position: "relative", top: "-22px" }}>or</p>
							<hr />
						</div>
						<button className={styles.google_login}><FcGoogle />  Continue With Google</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;