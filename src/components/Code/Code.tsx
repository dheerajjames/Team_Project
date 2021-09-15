import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
// import styles from './Code.module.css';

const CodeSnippet = () => {
    const {
        borderRadius,
        borderWidth
    } = useSelector((state: RootState) => state.card);
    const [codeSnippet, setCodeSnippet] = useState(`border-width: ${borderWidth} \nborder-radius: ${borderRadius}`);

    useEffect(()=>{
        setCodeSnippet(`border-width: ${borderWidth}px \nborder-radius: ${borderRadius}px`)
    }, [borderRadius, borderWidth]);

    // console.log(codeSnippet)

    return(
        <div>
            <textarea
                className="code"
                name="codeSnippet" 
                id="codeSnippet" 
                cols={30} 
                rows={10}
                value={codeSnippet}
                readOnly
            />
        </div>
    )
}

export default CodeSnippet;