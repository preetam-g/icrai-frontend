import React, { useState } from 'react';
import styles from './createTeam.module.css';

export const Member = ({idx}) => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [mail, setMail] = useState(null);
    const [phone, setPhone] = useState(null);

    return (
        <div className={styles.member}>
            <div className={styles.heading}>
                {idx === 0 ? "Team Leader" : `Team Member ${idx+1}`}
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <label htmlFor="first-name">First Name*</label>
                    <input type="text" value={firstName} placeholder="Rage" onChange={e => setFirstName(e.target.value)} required />
                </div>
                <div className={styles.column}>
                    <label htmlFor="last-name">Last Name*</label>
                    <input type="text" value={lastName} placeholder="Titan" onChange={e => setLastName(e.target.value)} required />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <label htmlFor="phone">Phone Number*</label>
                    <input type="number" value={phone} placeholder="Must be a Number" onChange={e => setPhone(e.target.value)} required />
                </div>
                <div className={styles.column}>
                    <label htmlFor="mail">Email ID*</label>
                    <input type="text" value={mail} placeholder="abc@gmail.com" onChange={e => setMail(e.target.value)} required />
                </div>
            </div>
        </div>

    );

};