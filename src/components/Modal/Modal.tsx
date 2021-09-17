import React,{useState,useEffect} from  "react";
import { FaRegWindowClose } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import styles from "../Modal/Modal.module.css";

const Modal: React.FunctionComponent = () =>{
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
        <div className={styles.overlay}>
            <div className={styles.container} style={inlineStyle}>
                <div className={styles.header}>
                    <h3 className={styles.title}>Modal Title</h3>
                    <FaRegWindowClose className={styles.icon}/>
                </div>
                <p className={styles.body}>Modal Body</p>
                <div className={styles.footer}> 
                    <button className={styles.close}>Close</button>
                    <button className={styles.save}>Save changes</button>
                </div>
            
            </div>
        </div>
        
    )
}

export default Modal;