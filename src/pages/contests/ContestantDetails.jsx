import React from 'react'
import styles from './contests.module.css'
import Details from './dummy.jsx'

const ContestantDetails = ({num}) => {
    return (
        <div className='DescriptionCards'>
            <div className={styles.AppliedDiv1}>
                <img src='groupicon'></img>
                <div className=''>Applied</div>
                <span>3</span>
            </div>
            <div className={styles.AppliedDiv1}>
                <img src='groupicon'></img>
                <div className=''>Deadline</div>
                <span>{Details[num-1].date}</span>
            </div>
            {/* <div className={styles.AppliedDiv1}>
                <img src='groupicon'></img>
                <div className=''>impressions</div>
                <span>235</span>
            </div> */}
        </div>
    )
}

export default ContestantDetails
