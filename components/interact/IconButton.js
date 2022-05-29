import styles from '../../styles/components/interact/IconButton.module.css';

export default function IconButton({
    onClick=()=>{},
    id="",
    children
}){
    return (
        //put className var after
        <button className={styles.iconButton} id={id || null} onClick={onClick}>
            {children}
        </button>
    );
}