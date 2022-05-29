import styles from '../../styles/components/interact/Link.module.css';

export default function Link({
    id="",
    href="/",
    children
}){
    return (
        //put className var after
        <button className={styles.linkContainer}>
            <a href={href} id={id} className={styles.link}>
                {children}
            </a>
        </button>
    );
}