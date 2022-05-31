import LogoImage from "../../public/images/logo.svg";
import styles from "../../styles/components/display/Logo.module.css";
import Link from "next/link";

export default function Logo({id="logo"}){
    return (
        <div className={styles.logo} id={id}>
            <Link href="/">
                <a>
                    <LogoImage/>
                </a>
            </Link>
        </div>
    );
}