import styles from "../styles/components/Main.module.css";

export default function Main({ children, headerMenuOpen, isLgScreen }) {
    return (
        <main className={`${headerMenuOpen && isLgScreen ? styles.opaque : null}} ${styles.main}`}>
            {children}
        </main>
    );
}