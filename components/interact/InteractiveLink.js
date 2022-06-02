import styles from '../../styles/components/interact/InteractiveLink.module.css';
import { useGlobalColors } from "../../context/GlobalThemeContext";
import Link from 'next/link';

export default function InteractiveLink({
    id="",
    href="/",
    color,
    borderColor,
    backgroundColor,
    target=null,
    children,
    onClick=()=>{}
}){
    const colors = useGlobalColors();
    const textColor = color ? color : colors?.text?.link ? colors.text.link : "black";
    const thisBorderColor = borderColor ? borderColor : colors?.border?.link ? colors.border.link : null;
    const thisBackgroundColor = backgroundColor ? backgroundColor : colors?.background?.link ? colors.background.link : null;

    return (
        <button className={styles.linkContainer} style={{borderColor: thisBorderColor, backgroundColor: thisBackgroundColor}} onClick={onClick}>
            <Link href={href}>                
                    <a id={id} className={styles.link} style={{color: textColor}} target={target} rel="noopener noreferrer">
                        {children}
                    </a>
            </Link>
        </button>

    );
    
}