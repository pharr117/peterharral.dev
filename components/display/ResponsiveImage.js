import dynamic from 'next/dynamic';
import styles from "../../styles/components/display/ResponsiveImage.module.css";
import { useGlobalBorderColors } from "../../context/GlobalThemeContext";

const Image = dynamic(() => import('./Image'), { ssr: false });

export default function ResponsiveImage({ src, maxWidth="600px", minWidth="400px", width="100%", height="auto", alt=null, borderStyle=null, borderColor=null}) {
    const borderColors = useGlobalBorderColors();

    let thisBorderColor = null;
    if (borderColor){
        thisBorderColor = borderColor;
    }else if(borderColors?.roundedImageOuter){
        thisBorderColor = borderColors.roundedImageOuter;
    }

    if (borderStyle == "rounded"){
        return (
            <div style={{ width: width, height: height, maxWidth: maxWidth, minWidth: minWidth, borderColor: thisBorderColor, display: "flex" }} className={styles.outerCir}>
                <Image src={src} alt={alt}/>
            </div>
        );
    }else{
        return (
            <div style={{ width: "100%", height: "auto", maxWidth: maxWidth, minWidth: minWidth }}>
                <Image src={src} alt={alt}/>
            </div>
        );
    }

}