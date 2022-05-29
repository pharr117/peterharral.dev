import styles from '../styles/Header.module.css'
import React from 'react'
import { MdMenu, MdMenuOpen } from "react-icons/md";
import IconButton from './interact/IconButton';

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
            <IconButton onClick={() => {setShowMenu(!showMenu)}} id="mainMenuButton">
                {icon}
            </IconButton>
        </div>
    );
}
