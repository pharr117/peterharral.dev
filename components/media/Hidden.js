import styles from "../../styles/components/media/Hidden.module.css";

export default function Hidden({ smDown, mdDown, lgDown, xlgDown, smUp, mdUp, lgUp, xLgUp, children }) {

    let className = null;
    if (smDown) {
        className = styles.hiddenSmDn;
    } else if (mdDown) {
        className = styles.hiddenMdDn;
    } else if (lgDown) {
        className = styles.hiddenLgDn;
    } else if (xlgDown) {
        className = styles.hiddenXLgDn;
    } else if (smUp){
        className = styles.hiddenSmUp;
    } else if (mdUp){
        className = styles.hiddenMdUp;
    }else if (lgUp){
        className = styles.hiddenLgUp;
    }else if (xLgUp){
        className = styles.hiddenXLgUp;
    }

    return <div className={className}>{children}</div>;
}