import styles from "../../styles/components/interact/HeaderMenu.module.css";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { isSm, isMd } from "../../hooks/media";
import IconButton from './IconButton';
import React, { useState, useRef, useEffect } from "react";
import Link from "./Link";

export default function HeaderMenu() {
    
    const wrapperRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    let icon = null;
    if (showMenu) {
        icon = <MdMenuOpen className={styles.menuIcon} id="mainMenuButtonIcon" />;
    } else {
        icon = <MdMenu className={styles.menuIcon} id="mainMenuButtonIcon" />;
    }

    const isSmallScreen = isSm();

    let width = "50%";

    if(isSmallScreen){
        width = "100%";
    }

    if (!showMenu) {
        width = "0px";
    }

    let style = {
        width: width
    }

    // below is the same as componentDidMount and componentDidUnmount
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    }

    return (
        <div id="headerMenuWrapper" ref={wrapperRef}>
            <IconButton onClick={() => { console.log("Showing menu");setShowMenu(!showMenu) }} id="mainMenuButton">
                {icon}
            </IconButton>
            <div className={styles.headerMenuContainer} style={style}>
                <Link href="/about" id="aboutLink">About</Link>
                <Link href="/current" id="currentLink">Current</Link>
                <Link href="/contact" id="contactLink">Contact</Link>
                <Link href="/ramblings">Ramblings</Link>
            </div>
        </div>
    );
}