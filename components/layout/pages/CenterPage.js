import styles from "../../../styles/components/layout/pages/CenterPage.module.css";

export default function CenterPage({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )

}