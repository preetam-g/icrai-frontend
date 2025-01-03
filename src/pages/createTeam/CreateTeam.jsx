	import styles from './createTeam.module.css';
	import { Member } from './Member';
	import Details from '../contests/dummy'
	import { useLocation,useNavigate } from 'react-router-dom';
	// import { teams } from '../../fakeDatabase'
	import { useEffect, useState } from 'react';
	import { IoMdClose } from 'react-icons/io';
	import { useCreateMyTeam } from '../../api/MyUserApi';

	const CreateTeam = ({onClose}) => {
		
		/* 
			add these to props
			props {teamDetails, onClose, limits}
			
			teamDetails comes from registration page of a competition
				contains title, and members array
			
			onClose is used to close the create team component when close button or submit is clicked

			limits comes from contest details, example below

		*/
        const navigate = useNavigate();
		const location = useLocation();
        const num = location.state?.num;

		// console.log("num:", num);
		// console.log("Details:", Details);
		// console.log("Details[num-1]:", num ? Details[num-1] : undefined);

		const limits = {lower: 2, upper: 4};
		const defaultMember = {name: '', university: '', phone: '', email: ''};
		const [teamTitle, setTeamTitle] = useState(null);
		const [members, setMembers] = useState(Array(limits.lower).fill(defaultMember));
		const [error, setError] = useState('');
        const [success, setSuccess] = useState('');

		const { createTeam, isLoading, isError, isSuccess } = useCreateMyTeam();
		
		const handleMembers = (value) =>{
			if (value === 1 && members.length < limits.upper) setMembers([...members, defaultMember]);
			else if (value === -1 && members.length > limits.lower) setMembers(members.slice(0, -1));
		}

		const handleMemberChange = (idx, field, value) => {
			setMembers(prevMembers => prevMembers.map((member, i) => 
				i === idx ? { ...member, [field]: value } : member
			));
		}

		const clearForm = () => {
			setTeamTitle('');
			setMembers(Array(limits.lower).fill(defaultMember));
			setError('');
			setSuccess('');
		};

		const handleSubmit = async (e) => {
			e.preventDefault();
			setError('');
			setSuccess('');

			try {
				const teamData = {
					hackathonName: Details[num - 1].contestHeading,
					teamName: teamTitle,
					members: members
				};
				console.log('Submitting team data:', teamData);

				await createTeam(teamData);
				setSuccess('Team created successfully!');
				
				setTimeout(() => {
					clearForm();
					if (onClose) {
						onClose();
					} else {
						navigate('/');
					}
				}, 2000);

			} catch (error) {
				setError(error.message || 'Failed to create team. Please try again.');
				console.error('Error creating team:', error);
			}
		};

		// const clearForm = () => {
		// 	setTeamTitle(null);
		// 	setMembers([defaultMember]);
		// };

		return(
			<div className={styles.example}>
				<div className={styles.container}>
					{error && (
						<div className={`${styles.message} ${styles.error}`}>
							{error}
						</div>
					)}

					{success && (
						<div className={`${styles.message} ${styles.success}`}>
							{success}
						</div>
					)}

					<form action="#" className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.teamName}>
					<h1 className={styles.header1}>{Details[num - 1].contestHeading}</h1>
					</div>
					<div className={styles.teamName}>
						<label className={styles.teamNameLabel}>
							<input 
								className={styles.ipTitle} 
								type="text" 
								placeholder="Team Name" 
								value={teamTitle || ''} 
								onChange={e => setTeamTitle(e.target.value)} 
								required
								disabled={isLoading}
							/>
						</label>
					</div>
						{
							members.map((member, idx) => (<>
								<Member 
									idx={idx}
									member={member}
									onChange={handleMemberChange}
									disabled={isLoading}
								/>
								{/* <p>hello: fn,{member.firstName} ln,{member.lastName} p,{member.phone} e,{member.email}</p>	 */}
							</>))
						}
						<button
							type='submit'
							className={`${styles.submit} ${isLoading ? styles.loading : ''}`}
							disabled={isLoading}
						>
							{isLoading ? 'Creating Team...' : 'Submit'}
						</button>
					</form>	
					<div className={styles.memberChange}>
						<button 
							onClick={() => handleMembers(1)}
							className={members.length < limits.upper ? '' : styles.disable}
							disabled={isLoading}
						>Add member</button>
						<button 
							onClick={() => handleMembers(-1)}
							className={members.length > limits.lower ? '' : styles.disable}
							disabled={isLoading}
						>Remove member</button>
					</div>
				</div>
			</div>
		);

	};

	export default CreateTeam;