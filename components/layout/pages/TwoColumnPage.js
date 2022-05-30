import styles from "../../../styles/components/layout/pages/TwoColumnPage.module.css";

export default function TwoColumnPage({ leftChild, rightChild }) {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )

}