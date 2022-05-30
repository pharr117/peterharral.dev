import styles from '../../styles/components/interact/Link.module.css';
import { useGlobalThemeContext } from "../../context/GlobalThemeContext";

export default function Link({
    id="",
    href="/",
    fancy,
    color,
    borderColor,
    backgroundColor,
    children
}){
    const colors = useGlobalThemeContext()?.colors;
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
        //put className var after
        <button className={className} style={{borderColor: thisBorderColor, backgroundColor: thisBackgroundColor}}>
            <a href={href} id={id} className={styles.link} style={{color: textColor}}>
                {children}
            </a>
        </button>
    );
}