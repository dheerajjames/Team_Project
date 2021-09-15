import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import styles from './Card.module.css';

const Card: React.FC = () => {
    const [inlineStyle, setInlineStyle] = useState({borderRadius: "", borderWidth: ""})
    const {
        borderRadius,
        borderWidth
    } = useSelector((state: RootState) => state.card);
    // inlineStyle = {
    //     borderRadius: borderRadius+'px',
    //     borderWidth: borderWidth+'px'
    // };
    useEffect(()=>{
        setInlineStyle({
            borderRadius: borderRadius+'px',
            borderWidth: borderWidth+'px'
        })
    }, [borderRadius, borderWidth]);

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