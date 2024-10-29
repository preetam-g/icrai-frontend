import React from 'react'
import styles from './contests.module.css'

const Card = ({contestClickHandler,index,element}) => {

    

  return (
    <div onClick={() => {contestClickHandler(index+1) }} className={styles.contestList}>
    <div className={styles.contestImageDiv}>
        <div className={styles.contestImagecontainer}>
            <img src={element.contestImage}></img>
        </div>
    </div>
    <div className={styles.contestDetails}>
        <div>
            <span className={styles.contestType}>{element.contestType}</span>
        </div>
        <div className={styles.contestHeading}>
            {element.contestHeading}
        </div>
        <div className={styles.contestCompany}>

        </div>
        <div className={styles.contestentDiv}>
            <span className={styles.applied}>
                {element.applied} Applied
            </span>
            <span className={styles.price}>
                {element.price} Days Left
            </span>
        </div>
        <div>
        {element.tags.map(tag=>{
            return(
                <span className={styles.contestentTags}>{tag}</span>
            )
        })}
        </div>
    </div>
</div>
  )
}

export default Card
