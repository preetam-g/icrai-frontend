import styles from './createTeam.module.css';
import { Member } from './Member';
import { teams } from '../../fakeDatabase'
import { useEffect, useState } from 'react';

const CreateTeam = () => {
	
	/* 
		add these to props
		props {teamDetails, onClose, limits}
		
		teamDetails comes from registration page of a competition
			contains title, and members array
		
		onClose is used to close the create team component when close button or submit is clicked

		limits comes from contest details, example below

	*/

	const limits = {lower: 3, upper: 5};
	const defaultMember = {firstName: '', lastName: '', phone: '', email: ''};
	const [teamTitle, setTeamTitle] = useState(null);
	const [members, setMembers] = useState(Array(limits.lower).fill(defaultMember));
	
	const handleMembers = (value) =>{
		if (value === 1 && members.length < limits.upper) setMembers([...members, defaultMember]);
		else if (value === -1 && members.length > limits.lower) setMembers(members.slice(0, -1));
	}

	const handleMemberChange = (idx, field, value) => {
		setMembers(prevMembers => prevMembers.map((member, i) => 
            i === idx ? { ...member, [field]: value } : member
        ));
	}

	const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Team Title:', teamTitle);
        console.log('Team Members:', members);
        // Here you can send the data to your backend or perform any other action
        
        clearForm();
        // onClose(); // used for closing the create team component
    };

	const clearForm = () => {
        setTeamTitle(null);
        setMembers([defaultMember]);
    };

	return(
		<div className={styles.example}>
			<div className={styles.container}>
				<div className={styles.closeBtn}>
					close button here, add styles and icon
				</div>
				<form action="#" className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.teamName}>
						<label className={styles.teamNameLabel}>
							<input 
								className={styles.ipTitle} 
								type="text" 
								placeholder="Team Name" 
								value={teamTitle || ''} 
								onChange={e => setTeamTitle(e.target.value)} 
								required
							/>
						</label>
					</div>
					{
						members.map((member, idx) => (<>
							<Member 
								idx={idx}
								member={member}
								onChange={handleMemberChange}
							/>
							{/* <p>hello: fn,{member.firstName} ln,{member.lastName} p,{member.phone} e,{member.email}</p>	 */}
						</>))
					}
					<button type='submit' className={styles.submit}>Submit</button>
				</form>	
				<div className={styles.memberChange}>
					<button 
						onClick={() => handleMembers(1)}
						className={members.length < limits.upper ? styles.enable : styles.disable}
					>Add member</button>
					<button 
						onClick={() => handleMembers(-1)}
						className={members.length > limits.lower ? styles.enable : styles.disable}
					>Remove member</button>
				</div>
			</div>
		</div>
	);

};

export default CreateTeam;