import styles from "../../styles/components/display/Heading.module.css";
import { useGlobalThemeContext } from "../../context/GlobalThemeContext";

const components = {
    "h1": (children, color) => ((<h1 style={{ color: color ? color : null }}>{children}</h1>)),
    "h2": (children, color) => ((<h2 style={{ color: color ? color : null }}>{children}</h2>)),
    "h3": (children, color) => ((<h3 style={{ color: color ? color : null }}>{children}</h3>)),
    "h4": (children, color) => ((<h4 style={{ color: color ? color : null }}>{children}</h4>)),
    "h5": (children, color) => ((<h5 style={{ color: color ? color : null }}>{children}</h5>)),
    "h6": (children, color) => ((<h6 style={{ color: color ? color : null }}>{children}</h6>)),
}

export default function Heading({ children, component = "h1", color }) {

    const colors = useGlobalThemeContext()?.colors?.text;
    let textColor = "black";
    
    //prefer passed in color over theme
    if (color){
        textColor = color;
    }else if (colors && component in colors){
        textColor = colors[component];
    }

    return (
        <div className={styles.heading}>
            {component in components ? components[component](children, textColor) : components["h1"](children, textColor)}
        </div>
    );
}