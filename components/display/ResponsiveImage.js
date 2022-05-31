import styles from "../../styles/components/display/ResponsiveImage.module.css";
import { useGlobalBorderColors } from "../../context/GlobalThemeContext";
import React from "react";

import Image from './Image';

export default function ResponsiveImage({ src, maxWidth="600px", minWidth="400px", width="100%", height="auto", alt=null, borderStyle=null, borderColor=null}) {
    const borderColors = useGlobalBorderColors();

    let thisBorderColor = null;
    if (borderColor){
        thisBorderColor = borderColor;
    }else if(borderColors?.roundedImageOuter){
        thisBorderColor = borderColors.roundedImageOuter;
    }

    return (
        <React.Fragment>
            <div style={{ width: width, height: height, maxWidth: maxWidth, minWidth: minWidth, borderColor: thisBorderColor, display: "flex" }} className={borderStyle? styles.outerCir: null}>
                <Image src={src} alt={alt} layout={"fill"}/>
            </div> 
        </React.Fragment>
    );
}