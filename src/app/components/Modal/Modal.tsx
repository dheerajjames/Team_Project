import React from  "react";
import { FaRegWindowClose } from 'react-icons/fa';
import styles from "../Modal/Modal.module.css";

const Modal: React.FunctionComponent = () =>{
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
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