import React, { useEffect } from 'react'
import styles from './contests.module.css'
import DescriptionHeader from './DescriptionHeader.jsx'
import ContestantDetails from './ContestantDetails.jsx'
import EligibilityCard from './EligibilityCard.jsx'
import DescriptionDiv from './MainDescription.jsx'


const Description = ({ num,windowWidth,setActivated}) => {
    const backBtnhandler=()=>{
        setActivated(false);
    }
    return (
        <div className={styles.container2}>
            {windowWidth<850&&
            <div className={styles.bactBtnDiv}>
                <button onClick={backBtnhandler} className={styles.backBtn}>Back</button>
            </div>
            }
            <DescriptionHeader num={num} />
            {/* <ContestantDetails num={num} /> */}
            <EligibilityCard num={num} />
            <DescriptionDiv num={num} />

        </div>
    )
}

export default Description
