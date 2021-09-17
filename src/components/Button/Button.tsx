import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { buttonInitialState } from "../../features/card/cardSlice";
import styles from './Button.module.css'


const Button: React.FunctionComponent = () =>{
    const buttonState = {...buttonInitialState.customStyle}
    const [inlineStyle, setInlineStyle] = useState({
        borderRadius: buttonState.borderRadius,
        borderWidth: buttonState.borderWidth ,
        borderStyles: buttonState.borderStyles,
        width: buttonState.width,
        height: buttonState.height,
        color: buttonState.color,
        backgroundColor: buttonState.backgroundColor,
        boxShadow: buttonState.boxShadowHorizontal + 'px' + ' ' + buttonState.boxShadowVertical + 'px'
    });


    const componentStyle = useSelector((state: RootState) => state.button);
    console.log('component style',componentStyle);
    const {
        borderRadius,
        borderWidth,
        borderStyles,
        width,
        height,
        color,
        backgroundColor,
        boxShadowHorizontal,
        boxShadowVertical
    } = componentStyle.customStyle
    useEffect(()=>{
        setInlineStyle({
            borderRadius: borderRadius+'px',
            borderWidth: borderWidth+'px',
            borderStyles: borderStyles,
            width: width+'rem',
            height: height+'rem',
            color: color,
            boxShadow: boxShadowHorizontal + 'px' + " " + boxShadowVertical + 'px',
            backgroundColor: backgroundColor
        })
    }, [componentStyle]);
    return(
        <button className={styles.button} style={inlineStyle}>Click here</button>
    )
}

export default Button;