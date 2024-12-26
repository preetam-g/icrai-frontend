import React from 'react';
import styles from './createTeam.module.css';

export const Member = ({ idx, member, onChange }) => {

    const handleChange = (field, value) => {
        onChange(idx, field, value);
    }

    return (
        <div className={styles.member}>
            <div className={styles.heading}>
                {idx === 0 ? "Team Leader" : `Team Member ${idx+1}`}
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <label htmlFor={`name-${idx}`}>Name*</label>
                    <input 
                        id={`name-${idx}`} 
                        className={styles.ip} 
                        type="text" 
                        value={member.name || ''}  
                        placeholder="Rage" 
                        onChange={e => handleChange('name', e.target.value)} 
                        required 
                    />
                </div>
                <div className={styles.column}>
                    <label htmlFor={`university-${idx}`}>University*</label>
                    <input 
                        id={`university-${idx}`} 
                        className={styles.ip} 
                        type="text" 
                        value={member.university || ''}  /* Ensure value is not undefined */
                        placeholder="Titan" 
                        onChange={e => handleChange('university', e.target.value)} 
                        required 
                    />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <label htmlFor={`phone-${idx}`}>Phone Number*</label>
                    <input 
                        id={`phone-${idx}`} 
                        className={styles.ip} 
                        type="number" 
                        value={member.phone || ''}  /* Ensure value is not undefined */
                        placeholder="Must be a Number" 
                        onChange={e => handleChange('phone', e.target.value)} 
                        required 
                    />
                </div>
                <div className={styles.column}>
                    <label htmlFor={`email-${idx}`}>Email ID*</label>
                    <input 
                        id={`email-${idx}`} 
                        className={styles.ip} 
                        type="text" 
                        value={member.email || ''}  /* Ensure value is not undefined */
                        placeholder="abc@gmail.com" 
                        onChange={e => handleChange('email', e.target.value)} 
                        required 
                    />
                </div>
            </div>
        </div>
    );
};
