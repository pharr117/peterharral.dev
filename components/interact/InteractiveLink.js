import styles from '../../styles/components/interact/InteractiveLink.module.css';
import { useGlobalColors } from "../../context/GlobalThemeContext";
import Link from 'next/link';

export default function InteractiveLink({
    id="",
    href="/",
    fancy,
    color,
    borderColor,
    backgroundColor,
    target=null,
    children,
    onClick=()=>{}
}){
    const colors = useGlobalColors();
    const textColors = colors?.text;
    const borderColors = colors?.border;
    const backgroundColors = colors?.background;

    //prefer passed in color over theme
    let textColor = "black";
    if (color){
        textColor = color;
    }else if (textColors && "link" in textColors){
        textColor = textColors["link"];
    }

    let thisBorderColor = null;
    if (borderColor){
        thisBorderColor = borderColor;
    }else if(borderColors && "link" in borderColors){
        thisBorderColor = borderColors["link"];
    }

    let thisBackgroundColor=null;
    if (backgroundColor){
        thisBackgroundColor = borderColor;
    }else if(backgroundColors){
        if("link" in backgroundColors){
            thisBackgroundColor = backgroundColors["link"];
        }
    }
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