import styles from '../styles/Header.module.css'
import React from 'react'
import { MdMenu, MdMenuOpen } from "react-icons/md";
import IconButton from './interact/IconButton';
import Link from './interact/Link';
import Heading from './display/Heading';
import Logo from "./display/Logo";

//global header component
export default function Header() {
    const [showMenu, setShowMenu] = React.useState(false);

    let icon = null;
    if (showMenu){
        icon = <MdMenuOpen className={styles.menuIcon} id="mainMenuButtonIcon"/>;
    }else{
        icon = <MdMenu className={styles.menuIcon} id="mainMenuButtonIcon"/>;
    }

    return (
        <div className={styles.mainContainer} id="headerMainContainer">
            <div className={styles.flexLeft} id="headerFlexLeft">
                <Logo/>
            </div>
            <div className={styles.flexRight} id="headerFlexRight">
                <div className={styles.flexItem}>
                    <Link href="/about">About</Link>
                </div>
                <div className={styles.flexItem}>
                    <Link href="/current">Current</Link>
                </div>
                <div className={styles.flexItem}>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className={styles.flexItem}>
                    <IconButton onClick={() => {setShowMenu(!showMenu)}} id="mainMenuButton">
                        {icon}
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
