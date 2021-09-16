import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import styles from './Card.module.css';

const Card: React.FC = () => {


    const [inlineStyle, setInlineStyle] = useState({borderRadius: "", borderWidth: ""})

    const [inlineStyle, setInlineStyle] = useState({
        borderRadius: "",
        borderWidth: "" ,
        borderStyles:"",
        width:"",
        height:"",
        color:"",
        backgroundColor:"",
        boxShadow:""
    });
  
    const {
        borderRadius,
        borderWidth,
        borderStyles,
        width,
        height,
        backgroundColor,
        color,
        boxShadowHorizontal,
        boxShadowVertical
    } = useSelector((state: RootState) => state.card);
    // inlineStyle = {
    //     borderRadius: borderRadius+'px',
    //     borderWidth: borderWidth+'px'
    // };
    useEffect(()=>{
        setInlineStyle({
            borderRadius: borderRadius+"px",
            borderWidth: borderWidth+"px",
            borderStyles:borderStyles+"px",
            width:width+"rem",
            height:height+"rem",
            color:color,
            backgroundColor:backgroundColor,
            boxShadow:boxShadowHorizontal+"px" + " " + boxShadowVertical+"px" ,
        })
    }, [borderRadius, borderWidth,borderStyles,boxShadowVertical,boxShadowHorizontal,height,width,color,backgroundColor]);

    // console.log(inlineStyle);

    return(
        <div className={styles.cardContainer} style={inlineStyle}>
            <div className={styles.cardTitle}>
                This is the Card Title.
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam ex molestias, illum magni ab! Ipsa aperiam ipsum omnis eaque.
                </div>
            </div>
        </div>
    )
}

export default Card;