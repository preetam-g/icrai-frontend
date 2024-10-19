import styles from './createTeam.module.css';
import { Member } from './Member';

const CreateTeam = () => {
	
	const handleMembers = () =>{
		
	}

	return(
		<div className={styles.example}>
			<div className={styles.container}>
				<form action="#" className={styles.form}>
					<Member idx={0}></Member>
					<Member idx={1}></Member>
					<Member idx={2}></Member>
					<Member idx={3}></Member>
					<Member idx={4}></Member>
					<button>Add member</button>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);

};

export default CreateTeam;