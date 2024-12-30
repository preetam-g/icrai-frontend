import { useEffect, useState } from 'react';
import styles from './contests.module.css'
import Description from './Description';
import Card from './sideCard.jsx';
import Details from './dummy.jsx'
import { useGetMyCompany } from '../../api/MyUserApi.jsx';

const Contests = ({windowWidth}) => {
	const { currentCompany,isLoading } = useGetMyCompany();
	const [contestactivated, setcontestActivated] = useState(1);
	const [isActivated, setActivated] = useState(false);

	const contestClickHandler = (num) => {
		if (contestactivated !== num) {
			setcontestActivated(num)
		}
		setActivated(true);
	}

	if(isLoading){
		return <div>Loading...</div>
	}

	if (!currentCompany || currentCompany.length === 0) {
        return <div>No hackathons found</div>;
    }

	return (
		<div className={styles.container}>
			{innerWidth >= 850?(
				<>
				<div className={styles.container1}>
				{currentCompany.map((element, index) => {
					return <Card
						contestClickHandler={contestClickHandler}
						element={element} index={index} key={index} />
				})}
			</div>
			<Description
					setcontestActivated={setcontestActivated} windowWidth={windowWidth} setActivated={setActivated}
					contestClickHandler={contestClickHandler} num={contestactivated}></Description>
			</>
			):windowWidth < 850 && !isActivated?(
				<div className={styles.container1}>
					{currentCompany.map((element, index) => {
						return <Card
							contestClickHandler={contestClickHandler}
							element={element} index={index} key={index} />
					})}

				</div>
			):(<Description
			setcontestActivated={setcontestActivated} windowWidth={windowWidth} setActivated={setActivated}
			contestClickHandler={contestClickHandler} num={contestactivated}></Description>)
			}
		</div>
	);
}
export default Contests;