import styles from "../../styles/components/display/Heading.module.css";

const components = {
    "h1": (children) => ((<h1>{children}</h1>)),
    "h2": (children) => ((<h2>{children}</h2>)),
    "h3": (children) => ((<h3>{children}</h3>)),
    "h4": (children) => ((<h4>{children}</h4>)),
    "h5": (children) => ((<h5>{children}</h5>)),
    "h6": (children) => ((<h6>{children}</h6>)),
}

export default function Heading({children, component="h1"}){
    return (
        <div className={styles.heading}>
            {component in components ? components[component](children): components["h1"](children)}
        </div>
    );
}