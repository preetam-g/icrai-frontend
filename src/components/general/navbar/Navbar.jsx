import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({selectedOption,setSelected}) => {
    const [isShowingOptions,setShowingOptions]=useState(false);
    const handleClick=(index)=>{
        setSelected(index);
        setShowingOptions(false);
    }
    const handleShowing=()=>{
        isShowingOptions==true?setShowingOptions(false):setShowingOptions(true);
    }
  return (
    <>
    <div className={styles.navbar}>

        <Link to='/' onClick={()=>handleClick(-1)}><span className={styles.Badge}>ICRAI</span></Link>

        <div className={isShowingOptions==true?styles.menushowing:styles.menuhiding}>
            
            <Link to='/login' onClick={()=>handleClick(1)} className={`${selectedOption==1?styles.selected:styles.normal}  ${styles.options}`} >
                <span className={styles.navOptions}  >Login</span>
            </Link>
            <Link to='/register' onClick={()=>handleClick(2)} className={`${selectedOption==2?styles.selected:styles.normal} ${styles.options}`} >
                <span className={styles.navOptions} >Register</span>
            </Link>
            <Link to='/contests' onClick={()=>handleClick(5)} className={`${selectedOption==5?styles.selected:styles.normal}  ${styles.options}`} >
                <span className={styles.navOptions}  >Contests</span>
            </Link>
            <Link to='/contests/register' onClick={()=>handleClick(6)} className={`${selectedOption==6?styles.selected:styles.normal}  ${styles.options}`} >
                <span className={styles.navOptions} >Hackathon</span>
            </Link>
            <Link to='/createTeam' onClick={()=>handleClick(7)} className={`${selectedOption==7?styles.selected:styles.normal}  ${styles.options}`} >
                <span className={styles.navOptions} >CreateTeam</span>
            </Link>
            <Link to='/aboutUs' onClick={()=>handleClick(4)} className={`${selectedOption==4?styles.selected:styles.normal}  ${styles.options}`} > 
                <span className={styles.navOptions} >About Us</span>
            </Link>

            <Link to='/profile' onClick={()=>handleClick(3)} className={`${selectedOption==3?styles.selected:styles.normal}  ${styles.options}`} >
                <span className={styles.navOptions} >Profile</span>
            </Link>
            
        </div>
        <div>
            <button onClick={handleShowing} className={styles.dropdownBtn}>{isShowingOptions==false?'Menu':'Close'}</button>
        </div>
    </div>
    </>
  );
};

export default Navbar;
