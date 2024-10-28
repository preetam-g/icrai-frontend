import React from 'react'
import styles from './contests.module.css'
import Details from './dummy.jsx'

const DescriptionDiv = ({num}) => {
  return (
    <div className={styles.descriptionDiv}>
    {Details[num-1].headers.map((text,index)=>{
        if(index==0){
            return <h1 className={styles.headers}>{text}</h1>
        }else{
        return<h3 className={styles.headers}>{text}</h3>}
    })}
    <p className={styles.description}>
        {Details[num-1].description}
    </p>
</div>
  )
}

export default DescriptionDiv
