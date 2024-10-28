import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../fakeDatabase.js'

const Navbar = ({selectedOption,setSelected}) => {

    const [isShowingOptions,setShowingOptions] = useState(false);
    const loc = useLocation();

    useEffect(() => {
        console.log(loc);
        const currIndex = navItems.findIndex(item => item.path === location.pathname);
        setSelected(currIndex);
    }, [loc])

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
            <div className={isShowingOptions ? styles.menushowing : styles.menuhiding}>
                {navItems.map((item, idx) => (
                    <Link
                        key={idx}
                        to={item.path}
                        onClick={() => handleClick(idx)}
                        className={`
                            ${styles.options}
                            ${selectedOption === idx ? styles.selected : styles.normal}
                        `}
                    >
                    <span className={styles.navOptions}>{item.label}</span>
                    </Link>
                ))}
            </div>
        <div>
            <button onClick={handleShowing} className={styles.dropdownBtn}>{isShowingOptions==false?'Menu':'Close'}</button>
        </div>
        </div>
        </>
    );
};

export default Navbar;
