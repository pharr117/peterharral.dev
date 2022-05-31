import { useGlobalBackgroundColors } from "../context/GlobalThemeContext";
import styles from "../styles/components/Main.module.css";

export default function Main({ children, headerMenuOpen, isLgScreen }) {
    const colors = useGlobalBackgroundColors();

    return (
        <main className={styles.main} style={{backgroundColor: colors?.main}}>
            <div className={headerMenuOpen && isLgScreen ? styles.opaque : null}>
                {children}
            </div>
        </main>
    );
}