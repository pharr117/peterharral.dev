import styles from "../../styles/components/layout/TwoColumnLayout.module.css";

//slightly modified version of the TwoColumnPage found below
//see the CSS modules for both for the diff
//could this be combined into 1?
export default function TwoColumnLayout({ leftChild, rightChild, leftGrow=1, rightGrow=1, gap=null, leftAlign="flex-start", rightAlign="flex-start" }) {
    return (
        <div className={styles.container}>
            <div className={styles.main} style={{gap: gap}}>
                <div className={styles.column} style={{flexGrow: leftGrow, justifyContent: leftAlign}}>
                    {leftChild}
                </div>
                <div className={styles.column} style={{flexGrow: rightGrow, alignItems: rightAlign}}>
                    {rightChild}
                </div>
            </div>
        </div>
    )

}