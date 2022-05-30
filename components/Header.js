import styles from '../styles/components/Header.module.css'
import React from 'react'
import Link from './interact/Link';
import Logo from "./display/Logo";
import Hidden from './media/Hidden';
import HeaderMenu from './interact/HeaderMenu';

//global header component
export default function Header({ setHeaderMenuOpen=()=>{} }) {


    return (
        <div className={styles.mainContainer} id="headerMainContainer">
            <div className={styles.flexLeft} id="headerFlexLeftOuter">
                <Logo id="headerLogo" />
            </div>
            <div className={styles.flexRight} id="headerFlexRight">
                <Hidden lgDown>
                    <div className={styles.flexLeft} id="headerFlexLeftInner">
                        <div className={styles.flexItem}>
                            <Link href="/current" id="currentLink">Current</Link>
                        </div>
                        <div className={styles.flexItem}>
                            <Link href="/contact" id="contactLink">Contact</Link>
                        </div>
                        <div className={styles.flexItem}>
                            <Link href="/ramblings">Ramblings</Link>
                        </div>
                        <div className={styles.flexItem}>
                            <Link href="/about" id="aboutLink">About</Link>
                        </div>
                        <div className={styles.flexItem}>
                            <Link fancy href="/ramblings">Resume</Link>
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
