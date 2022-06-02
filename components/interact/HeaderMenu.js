import styles from "../../styles/components/interact/HeaderMenu.module.css";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { isLgCallback, isSm } from "../../hooks/media";
import IconButton from './IconButton';
import React, { useState, useRef, useEffect } from "react";
import InteractiveLink from "./InteractiveLink";
import { useGlobalColors } from "../../context/GlobalThemeContext";
import TwoColumnLayout from "../layout/TwoColumnLayout";
import FancyLink from "./FancyLink";

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

    let width = "40%";

    if (isSmallScreen) {
        width = "75%";
    }

    if (!showMenu) {
        width = "0px";
    }

    let style = {
        width: width,
        backgroundColor: colors?.background?.headerMenu
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

    const onLinkClick = () => {
        setShowMenu(false);
        setHeaderMenuOpen(false);
    }

    return (
        <div id="headerMenuWrapper" ref={wrapperRef}>
            <IconButton onClick={() => { setHeaderMenuOpen(!showMenu); setShowMenu(!showMenu) }} id="mainMenuButton" color={colors?.buttons?.headerMenu}>
                {icon}
            </IconButton>
            <div className={styles.headerMenuContainer} style={style}>
                <TwoColumnLayout 
                    leftChild={
                        <React.Fragment>
                            <InteractiveLink href="/current" id="currentLink" onClick={onLinkClick}>Current</InteractiveLink>
                            <InteractiveLink href="/contact" id="contactLink"  onClick={onLinkClick}>Contact</InteractiveLink>
                            <InteractiveLink href="/ramblings"  onClick={onLinkClick}>Ramblings</InteractiveLink>
                            <InteractiveLink href="/about" id="aboutLink"  onClick={onLinkClick}>About</InteractiveLink>
                            <FancyLink href="/docs/resume.pdf" target="_blank" onClick={onLinkClick} text="Resume"/>
                        </React.Fragment>
                    } 
                    rightChild={<React.Fragment>
                        <IconButton onClick={() => { setHeaderMenuOpen(!showMenu); setShowMenu(!showMenu) }} style={{display: !showMenu? "none": null}} id="mainMenuButton" color={colors?.buttons?.headerMenu}>
                            {icon}
                        </IconButton>
                    </React.Fragment>}
                    rightAlign={"flex-end"}
                    leftAlign={"center"}
                />
            </div>
        </div>
    );
}