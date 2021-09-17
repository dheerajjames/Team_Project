import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BUTTON, CARD, MODAL } from '../../app/componentConstants';
import { RootState } from '../../app/store';

import { buttonActions, buttonInitialState, cardActions, cardInitialState ,modalActions, modalInitialState} from '../../features/card/cardSlice';
// import { setBackgroundColor, setBorderRadius, setBorderStyles, setBorderWidth, setBoxShadowHorizontal, setBoxShadowVertical, setColor, setHeight, setWidth } from '../../features/card/cardSlice';

import styles from './Input.module.css'

const selectInitialState = (activeComp:any) => {
    
    switch(activeComp){
        case CARD:
            return {...cardInitialState.customStyle};
        case BUTTON:
            return {...buttonInitialState.customStyle};
        case MODAL:
            return {...modalInitialState.customStyle};
        default:
            console.log('error')
    }
}

const selectActiveCompActions = (activeComp: any) => {
    
    switch(activeComp){
        case CARD:
            return cardActions
        case BUTTON:
            return buttonActions;
        case MODAL:
            return modalActions;
        default:
            console.log('error')
    }
    
}

// interface InputState{
//     initialState: {
//         borderRadius: number;
//         borderWidth: number;
//         borderStyles: string;
//         width: number;
//         height: string;
//         color: string;
//         backgroundColor: string;
//         boxShadowHorizontal: number;
//         boxShadowVertical: number;
//     } 
// }


const Input: React.FC = () => {
    // const [customStyle, setCustomStyle] = useState({borderRadius: '10', borderWidth:'0'});
    const activeComp = useSelector((state: RootState) => state.activeComp.activeComp);
    console.log(activeComp);
    const initialState = selectInitialState(activeComp);
    const [inputSlider, setInputSlider] = useState<any>({...initialState});
    console.log(inputSlider)
    const actions = selectActiveCompActions(activeComp);


    useEffect(() => {
        const initialState = selectInitialState(activeComp);
        setInputSlider({...initialState});
    }, [activeComp])


    const dispatch = useDispatch();
    // console.log('state');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSlider({...inputSlider, [event.target.name] : event.target.value})
    }
    useEffect(()=>{
        dispatch(actions?.setComponentProperty(inputSlider));

    }, [inputSlider, dispatch, actions]);
    return(
        <div>
            {/* <h1>Form hai bhai</h1> */}
            <form className={styles.inputContainer}>
                <label htmlFor="borderRadius">Border Radius</label>
                <input 
                    type="range" 
                    name="borderRadius" 
                    id="borderRadius"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={initialState?.borderRadius}
                    onChange={changeHandler}
                    value={inputSlider.borderRadius}
                />
                <label htmlFor="borderRadius">Border Width</label>
                <input 
                    type="range" 
                    name="borderWidth" 
                    id="borderWidth"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={initialState?.borderWidth}
                    onChange={changeHandler}
                    value={inputSlider.borderWidth}
                />
               
                <label>Border Style
                <input list="borderStyles" name="borderStyles" /></label>
                <datalist id="borderStyles">
                <option value="solid"/>
                <option value="dashed"/>
                <option value="dotted"/>
                <option value="double"/>
                </datalist>

                <label htmlFor="width">Width</label>
                <input 
                    type="range" 
                    name="width" 
                    id="width"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={initialState?.width}
                    onChange={changeHandler}
                    value={inputSlider.width}

                />
                <label htmlFor="height">Height</label>
                <input 
                    type="range" 
                    name="height" 
                    id="height"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={initialState?.height}
                    onChange={changeHandler}
                    value={inputSlider.height}

                />
                <label htmlFor="boxShadowHorizontal">Horizontal Box Shadow</label>
                <input 
                    type="range" 
                    name="boxShadowHorizontal" 
                    id="boxShadowHorizontal"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={initialState?.boxShadowHorizontal}
                    onChange={changeHandler}
                    value={inputSlider.boxShadowHorizontal}

                />
                <label htmlFor="boxShadowVertical">Vertical Box Shadow</label>
                <input 
                    type="range" 
                    name="boxShadowVertical" 
                    id="boxShadowVertical"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={initialState?.boxShadowVertical}
                    onChange={changeHandler}
                    value={inputSlider.boxShadowVertical}

                />
                <label htmlFor="color">Font Color</label>
                <input 
                    type="color" 
                    name="color" 
                    id="color"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={initialState?.color}
                    onChange={changeHandler}
                    value={inputSlider.color}

                />
                <label htmlFor="backgroundColor">Background Color</label>
                <input 
                    type="color" 
                    name="backgroundColor" 
                    id="backgroundColor"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={initialState?.backgroundColor}
                    onChange={changeHandler}
                    value={inputSlider.backgroundColor}

                />
                                  
                
            </form>
        </div>
    )
}

export default Input;