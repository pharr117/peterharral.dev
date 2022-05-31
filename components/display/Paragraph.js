import styles from "../../styles/components/display/Paragraph.module.css";
import { useGlobalTextColors } from "../../context/GlobalThemeContext";

export default function Paragraph({ children, color }) {

    const colors = useGlobalTextColors();
    let textColor = "black";

    //prefer passed in color over theme
    if (color){
        textColor = color;
    }else if (colors?.p){
        textColor = colors.p;
    }

    return (
        <div className={styles.paragraph}>
            <p style={{color: textColor}}>{children}</p>
        </div>
    );
}