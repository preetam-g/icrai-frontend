import React from 'react'
import Details from './dummy.jsx'
import styles from './contests.module.css'
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useGetMyCompany } from '../../api/MyUserApi.jsx';

const DescriptionHeader = ({ num }) => {
    const { currentCompany,isLoading } = useGetMyCompany();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/createTeam', { state: { num: num } });  // Pass num as state
    }

    if (isLoading) return <div>Loading...</div>;
    if (!currentCompany) return <div>No hackathons found</div>;

    const hackathon = currentCompany[num - 1];
    if (!hackathon) return <div>Hackathon not found</div>;

    return (
        <div className={styles.DescriptionCards1}>
            <div className={styles.headerDetailsDiv}>
                <div className={styles.contestImage}>
                    <img className={styles.srcImage} src={hackathon.contestImage}></img>
                </div>
                <div>
                    <h1 className={styles.heading}>{hackathon.contestHeading}</h1>
                    <span className={styles.SubHeading}>{hackathon.subheading}</span>
                </div>
            </div>
            <div className={styles.dateDetails}>
                Uploaded on:<span className={styles.descriptionDate}>{hackathon.date.split('T')[0]}</span>
            </div>
            <div className={styles.Application}>
                <div className={styles.leftcontent}>
                    <p className={styles.leftSpan}>{hackathon.price}</p>
                    <button className={styles.leftSpan} onClick={handleClick} >Register</button>
                </div>
                <div className={styles.rightcontent}>
                    <div className={styles.AppliedDiv1}>
                        {/* <img src='groupicon'></img> */}
                        <div>
                            <BsFillPeopleFill />
                            <div className=''>Applied</div>
                        </div>
                        <span>{hackathon.applied}</span>
                    </div>
                    <div className={styles.AppliedDiv1}>
                        {/* <img src='groupicon'></img> */}
                        <div>
                        <MdOutlineAccessTimeFilled />
                        <div className=''>Deadline</div>
                        </div>
                        <span>{hackathon.lastDate.split('T')[0]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionHeader
