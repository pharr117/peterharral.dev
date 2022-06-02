import Link from "next/link";
import styles from "../../styles/components/interact/FancyLink.module.css"
import { useGlobalColors } from "../../context/GlobalThemeContext";
import React from "react";

const validSizes = ["sm", "md", "lg", "xlg"];

const sizeValues = {
    "sm": {
        font: "1rem",
        margin: "20px",
        height: "35px",
    },
    "md": {
        font: "1.2rem",
        margin: "25px",
        height: "40px",
    },
    "lg": {
        font: "1.5rem",
        margin: "30px",
        height: "45px",
    },
    "xlg": {
        font: "2rem",
        margin: "35px",
        height: "50px",
    }
};

export default function FancyLink({
    id = "",
    target="",
    href = "/",
    size = "md",
    text = "",
    color,
    borderColor,
    backgroundColor,
    onClick=()=>{}
}) {

    const colors = useGlobalColors();

    const textColor = color ? color : colors?.text?.link ? colors.text.link : "black";
    const thisBorderColor = borderColor ? borderColor : colors?.border?.fancyLink ? colors.border.fancyLink : "black";
    const thisBackgroundColor = backgroundColor ? backgroundColor : colors?.background?.fancyLink ? colors.background.fancyLink : "black";

    size = validSizes.indexOf(size) !== -1 ? size : "md";
    
    let thisSize = sizeValues[size];
    
    return (
        <React.Fragment>
            <style jsx>{`
                div {
                    color: ${textColor};
                    background: ${thisBackgroundColor};
                    #make this a var
                    font-size: ${thisSize.font};
                    height:  ${thisSize.height};
                    border: 2px solid;
                    cursor: pointer;
                    -webkit-tap-highlight-color: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 0;
                }
                div::before,
                div::after {
                    position: absolute;
                    background: ${thisBackgroundColor};
                    z-index: -1;
                    transition: 0.5s;
                    font-size: ${thisSize.font};
                    content: '';
                }
                div::before {
                    height: ${thisSize.height};
                    width: 90%;
                }
                
                div::after {
                    width: 90%;
                    height: 0%;
                }
                div:hover::before {
                    width: 0%;
                }
                div:hover::after {
                    height: 0%;
                }
                div>span{
                    margin: ${thisSize.margin};
                }
            `}</style>
            <div className={styles.link} style={{ borderColor: thisBorderColor }} id={id}>
                <span className={styles.span} style={{fontSize: thisSize.font}}>
                    <Link href={href}><a className={styles.href} target={target} rel="noopener noreferrer"  onClick={onClick}>{text}</a></Link>
                </span>
            </div>
        </React.Fragment>
    );
}