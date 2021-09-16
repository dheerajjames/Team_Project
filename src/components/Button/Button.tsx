import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from './Button.module.css'


const Button: React.FunctionComponent = () =>{
    const [inlineStyle, setInlineStyle] = useState({borderRadius: "", fontSize: "", backgroundColor: ""})
    const {
        borderRadius,
        fontSize,
        backgroundColor
    } = useSelector((state: RootState) => state.button);
    useEffect(()=>{
        setInlineStyle({
            borderRadius: borderRadius+'px',
            fontSize: fontSize+'px',
            backgroundColor: backgroundColor
        })
    }, [borderRadius, fontSize, backgroundColor]);
    return(
        <button className={styles.button} style={inlineStyle}>Click here</button>
    )
}

export default Button;