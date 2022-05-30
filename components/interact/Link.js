import styles from '../../styles/components/interact/Link.module.css';

export default function Link({
    id="",
    href="/",
    fancy,
    children
}){

    let className = styles.linkContainer;
    if (fancy) className = styles.fancyLinkContainer;

    return (
        //put className var after
        <button className={className}>
            <a href={href} id={id} className={styles.link}>
                {children}
            </a>
        </button>
    );
}