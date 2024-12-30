import React from 'react'
import styles from './contests.module.css'
import Details from './dummy.jsx'
import { useGetMyCompany } from '../../api/MyUserApi.jsx'

const DescriptionDiv = ({ num }) => {
  const { currentCompany,isLoading } = useGetMyCompany();

  if (isLoading) return <div>Loading...</div>;
    if (!currentCompany) return <div>No hackathons found</div>;

    const hackathon = currentCompany[num - 1];
    if (!hackathon) return <div>Hackathon not found</div>;

  return (
    <div className={styles.descriptionDiv}>
      {hackathon.headers.map((text, index) => {
        if (index == 0) {
          return <h1 className={styles.headers}>{text}</h1>
        } else {
          return <h3 className={styles.headers}>{text}</h3>
        }
      })}
      <p className={styles.description}>
        {hackathon.description}
      </p>
    </div>
  )
}

export default DescriptionDiv
