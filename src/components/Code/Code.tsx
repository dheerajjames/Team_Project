import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
// import styles from './Code.module.css';

const CodeSnippet = () => {
    const codeContent = useSelector((state: RootState) => state.card);
    
    const [codeSnippet, setCodeSnippet] = useState(
                                                `.cardContainer{\n
                                                \tborder-width: ${codeContent.customStyle.borderWidth}px
                                                \tborder-radius: ${codeContent.customStyle.borderRadius}px
                                                }
                                            `);

    useEffect(()=>{
        setCodeSnippet(
            `.cardContainer{\n
                \tborder-width: ${codeContent.customStyle.borderWidth}px
                \tborder-radius: ${codeContent.customStyle.borderRadius}px
                }
            `)
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