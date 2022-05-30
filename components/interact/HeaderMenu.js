import styles from "../../styles/components/interact/HeaderMenu.module.css";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { isLgCallback, isSm } from "../../hooks/media";
import IconButton from './IconButton';
import React, { useState, useRef, useEffect } from "react";
import Link from "./Link";
import { useGlobalColors } from "../../context/GlobalThemeContext";

export default function HeaderMenu({ setHeaderMenuOpen = () => { } }) {
    const colors = useGlobalColors();

    const wrapperRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    let icon = null;
    if (showMenu) {
        icon = <MdMenuOpen className={styles.menuIcon} id="mainMenuButtonIcon" />;
    } else {
        icon = <MdMenu className={styles.menuIcon} id="mainMenuButtonIcon" />;
    }

    const handleLargeScreenChange = (matches) => {
        if (matches && showMenu) {
            setHeaderMenuOpen(false);
            setShowMenu(false);
        }
    }

    const onLargeScreen = isLgCallback(handleLargeScreenChange);
    const isSmallScreen = isSm();

    let width = "50%";

    if (isSmallScreen) {
        width = "75%";
    }

    if (!showMenu) {
        width = "0px";
    }

    let style = {
        width: width,
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, false)

        return () => {
            document.removeEventListener("keydown", handleKeyDown, false)
        }
    }, []);

    const handleKeyDown = event => {
        if (event.key === "Escape") {
            setShowMenu(false);
            setHeaderMenuOpen(false);
        }
    }

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowMenu(false);
            setHeaderMenuOpen(false);
        }
    }

    return (
        <div id="headerMenuWrapper" ref={wrapperRef}>
            <IconButton onClick={() => { setHeaderMenuOpen(!showMenu); setShowMenu(!showMenu) }} id="mainMenuButton" color={colors?.buttons?.headerMenu}>
                {icon}
            </IconButton>
            <div className={styles.headerMenuContainer} style={style}>
                <Link href="/current" id="currentLink">Current</Link>
                <Link href="/contact" id="contactLink">Contact</Link>
                <Link href="/ramblings">Ramblings</Link>
                <Link href="/about" id="aboutLink">About</Link>
                <Link fancy href="/docs/resume.pdf" target="_blank">Resume</Link>
            </div>
        </div>
    );
}