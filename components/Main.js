import styles from "../styles/components/Main.module.css";

export default function Main({ children, headerMenuOpen, isLgScreen }) {
    return (
        <main className={styles.main}>
            <div className={headerMenuOpen && isLgScreen ? styles.opaque : null}>
                {children}
            </div>
        </main>
    );
}