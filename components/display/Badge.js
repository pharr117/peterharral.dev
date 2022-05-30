import { useGlobalTextColors, useGlobalBorderColors, useGlobalBackgroundColors } from "../../context/GlobalThemeContext";
import styles from "../../styles/components/display/Badge.module.css"

export default function Badge({ text, backgroundColor, color, borderColor, onClick = null }) {
    const textColors = useGlobalTextColors();
    const borderColors = useGlobalBorderColors();
    const backgroundColors = useGlobalBackgroundColors();

    let thisTextColor = "black";
    if (color) {
        thisTextColor = color;
    } else if (textColors?.badge) {
        thisTextColor = textColors.badge;
    }

    let thisBackgroundColor = "white";
    if (backgroundColor) {
        thisBackgroundColor = backgroundColor;
    } else if (backgroundColors?.badge) {
        thisBackgroundColor = backgroundColors.badge;
    }

    let thisBorderColor = "black";
    if (borderColor) {
        thisBorderColor = borderColor;
    } else if (borderColors?.badge) {
        thisBorderColor = borderColors.badge;
    }

    if (onClick) {
        return (
            <button onClick={onClick} className={`${styles.badge} ${styles.button}`} style={{ borderColor: thisBorderColor, backgroundColor: thisBackgroundColor, color: thisTextColor }}>{text}</button>
        );
    } else {
        return (
            <div className={styles.badge} style={{ borderColor: thisBorderColor, backgroundColor: thisBackgroundColor, color: thisTextColor }}>{text}</div>
        );
    }
}