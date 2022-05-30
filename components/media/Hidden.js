import styles from "../../styles/components/media/Hidden.module.css";

export default function Hidden({ smDown, mdDown, lgDown, xlgDown, mdUp, children }) {

    let className = null;
    if (smDown) {
        className = styles.hiddenSmDn;
    } else if (mdDown) {
        className = styles.hiddenMdDn;
    } else if (lgDown) {
        className = styles.hiddenLgDn;
    } else if (xlgDown) {
        className = styles.hiddenXLgDn;
    } else if (mdUp){
        className = styles.hiddenMdUp
    }

    return <div className={className}>{children}</div>;
}