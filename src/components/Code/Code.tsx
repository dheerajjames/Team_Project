import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
// import styles from './Code.module.css';

const CodeSnippet = () => {
    const codeContent = useSelector((state: RootState) => state.card);
    
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