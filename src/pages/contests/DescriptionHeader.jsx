import React from 'react'
import Details from './dummy.jsx'
import styles from './contests.module.css'
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { useNavigate } from 'react-router-dom';




const DescriptionHeader = ({ num }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/createTeam', { state: { num: num } });  // Pass num as state
    }

    return (
        <div className={styles.DescriptionCards1}>
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
                <div className={styles.leftcontent}>
                    <p className={styles.leftSpan}>{Details[num - 1].price}</p>
                    <button className={styles.leftSpan} onClick={handleClick} >Register</button>
                </div>
                <div className={styles.rightcontent}>
                    <div className={styles.AppliedDiv1}>
                        {/* <img src='groupicon'></img> */}
                        <div>
                            <BsFillPeopleFill />
                            <div className=''>Applied</div>
                        </div>
                        <span>3</span>
                    </div>
                    <div className={styles.AppliedDiv1}>
                        {/* <img src='groupicon'></img> */}
                        <div>
                        <MdOutlineAccessTimeFilled />
                        <div className=''>Deadline</div>
                        </div>
                        <span>{Details[num - 1].date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionHeader
