import React, { useState } from 'react'
import styles from './contests.module.css'
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";

const Card = ({ contestClickHandler, index, element }) => {
    const [isHovering, setHovered] = useState(false)

    const handleHovering = () => {
        setHovered(!isHovering);
    }


    return (
        <div onMouseEnter={handleHovering} onMouseLeave={handleHovering} onClick={() => { contestClickHandler(index + 1) }} className={styles.contestList}>
            <div className={styles.contestImageDiv}>
                <div className={styles.contestImagecontainer}>
                    <img src={element.contestImage}></img>
                </div>
            </div>
            <div className={styles.contestDetails}>
                <div className={styles.contestHeader1}>
                    <span className={styles.contestType}>{element.contestType}</span>
                    {isHovering &&
                        <button className={styles.visitIconBtn}><img className={styles.VisitIcon} src='https://www.svgrepo.com/show/510970/external-link.svg'></img></button>
                    }
                </div>
                <div className={styles.contestHeading}>
                    {element.contestHeading}
                </div>
                <div className={styles.contestCompany}>

                </div>
                <div className={styles.contestentDiv}>
                    <span className={styles.applied}>
                        <BsFillPeopleFill />
                        {element.applied} Applied
                    </span>
                    <span className={styles.price}>
                        <IoIosPricetags />
                        {element.price}
                    </span>
                    <span className={styles.daysleft}>
                        <MdOutlineAccessTimeFilled />
                        {element.daysLeft} Days Left
                    </span>
                </div>
                <div className={styles.tags}>
                    {element.tags.map(tag => {
                        return (
                            <span className={styles.contestentTags}>{tag}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card
