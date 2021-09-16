import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
// import styles from './Code.module.css';

const CodeSnippet = () => {
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

    } = useSelector((state: RootState) => state.card);
    const [codeSnippet, setCodeSnippet] = useState(
                                                `.cardContainer{\n
                                                \tborder-width: ${borderWidth}px
                                                \tborder-radius: ${borderRadius}px
                                                \tborder-style: ${borderStyles}px
                                                \tcolor: ${color}
                                                \tbackground-color: ${backgroundColor}
                                                \theight: ${height}rem
                                                \twidth: ${width}rem
                                                \tbox-shadow: ${boxShadowHorizontal}px  ${boxShadowVertical}px 
                                                }
                                            `);

    useEffect(()=>{
        setCodeSnippet(
            `.cardContainer{
            \tborder-width: ${borderWidth}px
            \tborder-radius: ${borderRadius}px
            \tborder-style: ${borderStyles}px
            \tcolor: ${color}
            \tbackground-color: ${backgroundColor}
            \theight: ${height}rem
            \twidth: ${width}rem
            \tbox-shadow: ${boxShadowHorizontal}px  ${boxShadowVertical}px 
            }
        `)
    }, [borderRadius, borderWidth,borderStyles,boxShadowHorizontal,boxShadowVertical,color,backgroundColor,height,width]);

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