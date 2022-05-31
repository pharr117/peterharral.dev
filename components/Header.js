import styles from '../styles/components/Header.module.css'
import React from 'react'
import InteractiveLink from './interact/InteractiveLink';
import Logo from "./display/Logo";
import Hidden from './media/Hidden';
import HeaderMenu from './interact/HeaderMenu';
import { useGlobalColors } from "../context/GlobalThemeContext";

//global header component
export default function Header({ setHeaderMenuOpen=()=>{} }) {
    const colors = useGlobalColors();

    return (
        <div className={styles.mainContainer} style={{backgroundColor: colors?.background?.header}} id="headerMainContainer">
            <div className={styles.flexLeft} id="headerFlexLeftOuter">
                <Logo id="headerLogo" />
            </div>
            <div className={styles.flexRight} id="headerFlexRight">
                <Hidden lgDown>
                    <div className={styles.flexLeft} id="headerFlexLeftInner">
                        <div className={styles.flexItem}>
                            <InteractiveLink href="/current" id="currentLink">Current</InteractiveLink>
                        </div>
                        <div className={styles.flexItem}>
                            <InteractiveLink href="/contact" id="contactLink">Contact</InteractiveLink>
                        </div>
                        <div className={styles.flexItem}>
                            <InteractiveLink href="/ramblings">Ramblings</InteractiveLink>
                        </div>
                        <div className={styles.flexItem}>
                            <InteractiveLink href="/about" id="aboutLink">About</InteractiveLink>
                        </div>
                        <div className={styles.flexItem}>
                            <InteractiveLink fancy href="/docs/resume.pdf" target="_blank">Resume</InteractiveLink>
                        </div>
                    </div>
                </Hidden>
                <Hidden lgUp>
                    <div className={styles.flexItem}>
                        <div>
                            <HeaderMenu setHeaderMenuOpen={setHeaderMenuOpen}/>
                        </div>
                    </div>
                </Hidden>
            </div>
        </div>
    );
}
