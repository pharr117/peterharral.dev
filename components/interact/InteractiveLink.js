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
    children
}){
    const colors = useGlobalColors();
    const textColors = colors?.text;
    const borderColors = colors?.border;
    const backgroundColors = colors?.background;

    let className = styles.linkContainer;
    if (fancy) className = styles.fancyLinkContainer;

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
    }else if(borderColors){
        if (fancy && "fancyLink" in borderColors){
            thisBorderColor = borderColors["fancyLink"];
        } else if("link" in borderColors){
            thisBorderColor = borderColors["link"];
        }
    }

    let thisBackgroundColor=null;
    if (backgroundColor){
        thisBackgroundColor = borderColor;
    }else if(backgroundColors){
        if (fancy && "fancyLink" in backgroundColors){
            thisBackgroundColor = backgroundColors["fancyLink"];
        } else if("link" in backgroundColors){
            thisBackgroundColor = backgroundColors["link"];
        }
    }
    return (
        <button className={className} style={{borderColor: thisBorderColor, backgroundColor: thisBackgroundColor}}>
            <Link href={href}>                
                    <a id={id} className={styles.link} style={{color: textColor}} target={target} rel="noopener noreferrer">
                        {children}
                    </a>
            </Link>
        </button>

    );
    
}