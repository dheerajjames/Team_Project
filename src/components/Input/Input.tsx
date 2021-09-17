import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BUTTON, CARD } from '../../app/componentConstants';
import { RootState } from '../../app/store';
import { buttonActions, buttonInitialState, cardActions, cardInitialState } from '../../features/card/cardSlice';

import styles from './Input.module.css'

const selectInitialState = (activeComp:any) => {
    let customStyle;
    switch(activeComp){
        case CARD:
            customStyle = {...cardInitialState.customStyle};
            break;
        case BUTTON:
            customStyle = {...buttonInitialState.customStyle};
            break;
        default:
            console.log('error')
    }
    return customStyle;
}

const selectActiveCompActions = (activeComp: any) => {
    
    switch(activeComp){
        case CARD:
            return cardActions
        case BUTTON:
            return buttonActions;
        default:
            console.log('error')
    }
    
}


const Input = () => {
    // const [customStyle, setCustomStyle] = useState({borderRadius: '10', borderWidth:'0'});
    const activeComp = useSelector((state: RootState) => state.activeComp.activeComp);
    console.log(activeComp);
    const initialState = selectInitialState(activeComp);
    const [inputSlider, setInputSlider] = useState({...initialState});
    const actions = selectActiveCompActions(activeComp);

    useEffect(() => {
        const initialState = selectInitialState(activeComp);
        setInputSlider({...initialState});
    }, [activeComp])

    // const {
    //     borderRadius,
    //     borderWidth
    // } = useSelector((state: RootState) => state.card);
    const dispatch = useDispatch();
    // console.log('state');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSlider({...inputSlider, [event.target.name] : event.target.value})

        // console.log('event target',event.target.name)
        // switch(event.target.name){
        //     case 'borderRadius':
        //         setCustomStyle({...customStyle, [event.target.name] : event.target.value})
        //         // setCustomStyle({...customStyle, borderRadius: event.target.value});
        //         break;
        //     case 'borderWidth':
        //         setCustomStyle({...customStyle, borderWidth: event.target.value});
        //         break;
        //     default:
        //         console.log('Error');
        //         break;
        // }
    }

    

    // useEffect(()=>{
        
    //     dispatch(actions?.setBorderRadius(customStyle.borderRadius));
        
    // }, [customStyle.borderRadius, dispatch, actions])

    useEffect(()=>{
        dispatch(actions?.setComponentProperty(inputSlider));

    }, [inputSlider, dispatch, actions]);
    return(
        <div>
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
            </form>
        </div>
    )
}

export default Input;