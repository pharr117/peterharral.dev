import styles from '../../styles/components/interact/IconButton.module.css';

export default function IconButton({
    onClick=()=>{},
    id="",
    children
}){
    return (
        <button className={styles.iconButton} id={id || null} onClick={onClick}>
            <div className={styles.imageHolder}>
                {children}
            </div>
        </button>
    );
}