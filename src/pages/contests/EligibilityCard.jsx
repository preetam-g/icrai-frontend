import React from 'react'
import styles from './contests.module.css'
import Details from './dummy.jsx'
import { useGetMyCompany } from '../../api/MyUserApi.jsx'

const EligibilityCard = ({ num }) => {
  const { currentCompany,isLoading } = useGetMyCompany();

  if (isLoading) return <div>Loading...</div>;
    if (!currentCompany) return <div>No hackathons found</div>;

    const hackathon = currentCompany[num - 1];
    if (!hackathon) return <div>Hackathon not found</div>;

  return (
    <div className={styles.EligibilityDiv}>
      <h1>Eligibility</h1>
      <div className={styles.Eligibilities}>
        {hackathon.tags.map(element => {
          return (<>
            <span className={styles.tag1}>{element}</span>
          </>)
        })}
        {hackathon.tags.length == 0 &&
          <span>Open for All</span>
        }
      </div>
    </div>
  )
}

export default EligibilityCard
