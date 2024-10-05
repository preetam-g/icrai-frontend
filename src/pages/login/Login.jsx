import styles from './login.module.css'

const Login = () => {
	return (
		<div className={styles.example}>
			<div className="container">
				<div className="form">
					<form action="#">
						<label htmlFor="Primary_email">Primary Email</label>
						<br />
						<input type="text" placeholder="Value" />
						<br />
						<label htmlFor="Password">Password</label>
						<br />
						<input type="text" placeholder="Value" />
						<br />
						<button className="login">Log-in</button>
						<br />
						<a href="#">Forgot Password?</a>
						<div className="or">
							<hr />
							<p style={{ position: "relative", top: "-22px" }}>or</p>
							<hr />
						</div>
						<button className="google_login"><FcGoogle />  Continue With Google</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;