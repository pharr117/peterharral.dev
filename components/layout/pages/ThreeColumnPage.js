import styles from "../../../styles/components/layout/pages/ThreeColumnPage.module.css";

export default function ThreeColumnPage({ leftChild, middleChild, rightChild, leftGrow=1, middleGrow=1, rightGrow=1, gap=null }) {
    return (
        <div className={styles.container}>
            <div className={styles.main} style={{gap: gap}}>
                <div className={styles.column} style={{flexGrow: leftGrow}}>
                    {leftChild}
                </div>
                <div className={styles.column} style={{flexGrow: middleGrow}}>
                    {middleChild}
                </div>
                <div className={styles.column} style={{flexGrow: rightGrow}}>
                    {rightChild}
                </div>
            </div>
        </div>
    )

}