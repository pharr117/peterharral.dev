import LogoImage from "../../public/images/logo.svg";
import styles from "../../styles/display/Logo.module.css";

export default function Logo(){
    return (
        <div className={styles.logo}>
            <LogoImage/>
        </div>
    );
}