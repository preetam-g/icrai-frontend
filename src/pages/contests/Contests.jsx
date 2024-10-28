import { useState } from 'react';
import styles from './contests.module.css'
import Description from './Description';
import Card from './sideCard.jsx';
import Details from './dummy.jsx'

const Contests = () => {
	const [contestactivated, setcontestActivated] = useState(1);

	const contestClickHandler = (num) => {
		if (contestactivated !== num) {
			setcontestActivated(num)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.container1}>
				{Details.map((element,index) => {
					return<Card 
					contestClickHandler={contestClickHandler}
					element={element} index={index} key={index}/>
				})}

			</div>

			<Description 
			setcontestActivated={setcontestActivated}
			contestClickHandler={contestClickHandler} num={contestactivated}></Description>
		</div>
	);
}
export default Contests;