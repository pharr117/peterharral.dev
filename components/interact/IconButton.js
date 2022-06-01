import styles from '../../styles/components/interact/IconButton.module.css';
import { useGlobalColors } from "../../context/GlobalThemeContext";
import { IconContext } from 'react-icons';

export default function IconButton({
    onClick=()=>{},
    id="",
    color,
    style={},
    children
}){
    const colors = useGlobalColors();
    const iconColor = color || colors?.buttons?.icon;
    
    return (
        <button className={styles.iconButton} id={id || null} onClick={onClick} style={style}>
            <IconContext.Provider value={{color: iconColor}}>
                <div className={styles.imageHolder}>
                    {children}
                </div>
            </IconContext.Provider>
        </button>
    );
}