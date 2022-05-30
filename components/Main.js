import styles from "../styles/components/Main.module.css";
import { useGlobalThemeContext } from "../context/GlobalThemeContext";

export default function Main({ children, headerMenuOpen, isLgScreen }) {
    const colors = useGlobalThemeContext()?.colors;
    console.log(colors);
    return (
        <main className={headerMenuOpen && isLgScreen ? styles.opaque : null} style={{backgroundColor: colors?.background?.main}}>
            {children}
        </main>
    );
}