import React from 'react'
import styles from './contests.module.css'
import Details from './dummy.jsx'

const EligibilityCard = ({num}) => {
  return (
    <div className={styles.EligibilityDiv}>
    <h1>Eligibility</h1>
    <div className={styles.Eligibilities}>
        {Details[num-1].tags.map(element=>{
            return(<>
            <span className={styles.tag1}>{element}</span>
            </>)
        })}
        {Details[num-1].tags.length==0 &&
            <span>Open for All</span>
        }
    </div>
</div>
  )
}

export default EligibilityCard
