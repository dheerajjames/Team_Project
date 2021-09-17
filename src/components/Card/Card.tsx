import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import styles from './Card.module.css';

const Card: React.FC = () => {


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

    const componentStyle = useSelector((state: RootState) => state.card);
    console.log('component style',componentStyle);
    // const {
    //     borderRadius,
    //     borderWidth,
    //     borderStyles,
    //     width,
    //     height,
    //     color,
    //     backgroundColor,
    //     boxShadowHorizontal,
    //     boxShadowVertical
    // } = componentStyle.customStyle

    useEffect(()=>{
        console.log('in useEffect of Card.tsx',componentStyle.customStyle);
        setInlineStyle({
            borderRadius: componentStyle.customStyle.borderRadius+'px',
            borderWidth: componentStyle.customStyle.borderWidth+'px',
            borderStyles:componentStyle.customStyle.borderStyles+"px",
            width:componentStyle.customStyle.width+"rem",
            height:componentStyle.customStyle.height+"rem",
            color:componentStyle.customStyle.color,
            backgroundColor:componentStyle.customStyle.backgroundColor,
            boxShadow:componentStyle.customStyle.boxShadowHorizontal+"px" + " " + componentStyle.customStyle.boxShadowVertical+"px" ,
        })
    }, [componentStyle]);

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