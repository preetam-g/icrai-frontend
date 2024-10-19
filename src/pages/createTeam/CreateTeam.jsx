import styles from './createTeam.module.css';
import { Member } from './Member';
import { teams } from '../../fakeDatabase'
import { useState } from 'react';

const CreateTeam = () => {

	const [teamTitle, setTeamTitle] = useState(null);
	
	const handleMembers = () =>{

	}

	return(
		<div className={styles.example}>
			<div className={styles.container}>
				<form action="#" className={styles.form}>
					<div className={styles.teamName}>
						<label className={styles.teamNameLabel}>
							{/* <p>Team Name</p> */}
							<input 
								className={styles.ipTitle} 
								type="text" 
								placeholder="Team Name" 
								value={teamTitle} 
								onChange={e => setTeamTitle(e.target.value)} 
								required
							/>
						</label>
					</div>
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