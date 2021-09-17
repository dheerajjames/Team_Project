import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { RootState } from '../../app/store';
import { BUTTON, CARD, MODAL } from '../../app/componentConstants';
// import styles from './Code.module.css';

const CodeSnippet = () => {
    const activeComponent=useSelector((state: RootState)=>state.activeComp)
    const codeContent = useSelector((state: RootState) => state.card); 
    const activeComp = useSelector((state: RootState) => state.activeComp.activeComp);
 
    const [codeSnippet, setCodeSnippet] = useState(
                        `.container{
                            border-width: ${codeContent.customStyle.borderWidth}px
                            border-radius: ${codeContent.customStyle.borderRadius}px
                            border-style: ${codeContent.customStyle.borderStyles}px
                            color: ${codeContent.customStyle.color}
                            background-color: ${codeContent.customStyle.backgroundColor}
                            height: ${codeContent.customStyle.height}rem
                            width: ${codeContent.customStyle.width}rem
                            box-shadow: ${codeContent.customStyle.boxShadowHorizontal}px  ${codeContent.customStyle.boxShadowVertical}px
                        }`)
                                                


    const [reactCodeSnippet, setReactCodeSnippet] = useState(  
        `<div className={styles.cardContainer} style={inlineStyle}>
            <div className={styles.cardTitle}>
                This is the Card Title.
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam ex molestias, illum magni ab! Ipsa aperiam ipsum omnis eaque.
                </div>
            </div>
        </div>`
    )

    useEffect(()=>{
        switch(activeComp){
            case CARD:
                setReactCodeSnippet(
                    `<div className={styles.cardContainer} style={inlineStyle}>
                         <div className={styles.cardTitle}>
                            This is the Card Title.
                         </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam ex molestias, illum magni ab! Ipsa aperiam ipsum omnis eaque.
                        </div>
                    </div>
                </div>`
                )
                break;
            case BUTTON:
                setReactCodeSnippet(
                    ` <button className={styles.button} style={inlineStyle}>Click here</button>`
                )
                break;
            case MODAL:
                setReactCodeSnippet(
                    `<div className={styles.overlay}>
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
                    </div>`
                )
                break;
            default:
                console.log('error')
        }
    }, [activeComp])


    useEffect(()=>{
        setCodeSnippet(

            `.container{
                border-width: ${codeContent.customStyle.borderWidth}px
                border-radius: ${codeContent.customStyle.borderRadius}px
                border-style: ${codeContent.customStyle.borderStyles}px
                color: ${codeContent.customStyle.color}
                background-color: ${codeContent.customStyle.backgroundColor}
                height: ${codeContent.customStyle.height}rem
                width: ${codeContent.customStyle.width}rem
                box-shadow: ${codeContent.customStyle.boxShadowHorizontal}px  ${codeContent.customStyle.boxShadowVertical}px
            }`)
    }, [codeContent]);

    // console.log(codeSnippet)

    return(
        <div>
            <textarea
                className="code"
                name="reactcodeSnippet" 
                id="reactcodeSnippet" 
                cols={40} 
                rows={10}
                value={reactCodeSnippet}
                readOnly
            />
            <textarea
                className="code"
                name="codeSnippet" 
                id="codeSnippet" 
                cols={40} 
                rows={10}
                value={codeSnippet}
                readOnly
            />
        </div>
    )
}

export default CodeSnippet;