import React from 'react'
import Details from './dummy.jsx'
import styles from './contests.module.css'


const DescriptionHeader = ({num}) => {
    return (
        <div className='DescriptionCards'>
            <div className={styles.headerDetailsDiv}>
                <div className={styles.contestImage}>
                    <img className={styles.srcImage} src={Details[num - 1].contestImage}></img>
                </div>
                <div>
                    <h1 className={styles.heading}>{Details[num - 1].contestHeading}</h1>
                    <span className={styles.SubHeading}>{Details[num - 1].subheading}</span>
                </div>
            </div>
            <div className={styles.dateDetails}>
                Uploaded on:<span className={styles.descriptionDate}>{Details[num - 1].date}</span>
            </div>
            <div className={styles.Application}>
                <span>{Details[num - 1].price}</span>
                <button>Apply</button>
            </div>
        </div>
    )
}

export default DescriptionHeader
