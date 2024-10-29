import React from 'react'
import styles from './contests.module.css'
import DescriptionHeader from './DescriptionHeader.jsx'
import ContestantDetails from './ContestantDetails.jsx'
import EligibilityCard from './EligibilityCard.jsx'
import DescriptionDiv from './MainDescription.jsx'


const Description = ({ num }) => {
    return (
        <div className={styles.container2}>

            <DescriptionHeader num={num} />
            <ContestantDetails num={num} />
            <EligibilityCard num={num} />
            <DescriptionDiv num={num} />

        </div>
    )
}

export default Description
