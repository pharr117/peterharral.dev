import styles from "../../styles/components/display/Paragraph.module.css";
import { useGlobalTextColors } from "../../context/GlobalThemeContext";

export default function Paragraph({ children, component = "p", color }) {

    const colors = useGlobalTextColors();
    let textColor = "black";
    
    //prefer passed in color over theme
    if (color){
        textColor = color;
    }else if (colors && "p" in colors){
        textColor = colors[component];
    }

    return (
        <div className={styles.paragraph}>
            <p>{children}</p>
        </div>
    );
}