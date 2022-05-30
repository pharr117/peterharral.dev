import LogoImage from "../../public/images/logo.svg";
import styles from "../../styles/components/display/Logo.module.css";

export default function Logo({id="logo"}){
    return (
        <div className={styles.logo} id={id}>
            <a href="/">
                <LogoImage/>
            </a>
        </div>
    );
}