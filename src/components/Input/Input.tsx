import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setBackgroundColor, setBorderRadius, setBorderStyles, setBorderWidth, setBoxShadowHorizontal, setBoxShadowVertical, setColor, setHeight, setWidth } from '../../features/card/cardSlice';

import styles from './Input.module.css'


const Input = () => {

    const {
        borderRadius,
        borderWidth,
        borderStyles,
        height,
        width,
        color,
        backgroundColor,
        boxShadowHorizontal,
        boxShadowVertical
    } = useSelector((state: RootState) => state.card );
    const dispatch = useDispatch();
    // console.log('state');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('event target',event.target.name)
        switch(event.target.name){
            case 'borderRadius':
                dispatch(setBorderRadius(event.target.value));
                break;
            case 'borderWidth':
                dispatch(setBorderWidth(event.target.value));
                break;
            case 'borderStyles':
                dispatch(setBorderStyles(event.target.value));
                break;
            case 'width':
                dispatch(setWidth(event.target.value));
                break;
            case 'height':
            dispatch(setHeight(event.target.value));
                break;
            case 'color':
            dispatch(setColor(event.target.value));
                break;
            case 'backgroundColor':
                dispatch(setBackgroundColor(event.target.value));
                break;
            case 'boxShadowHorizontal':
            dispatch(setBoxShadowHorizontal(event.target.value));
                break;
            case 'boxShadowVertical':
            dispatch(setBoxShadowVertical(event.target.value));
                break;
            default:
                console.log('Error');
                break;
        }
    }
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
                    defaultValue={borderRadius}
                    onChange={changeHandler}
                />
                <label htmlFor="borderRadius">Border Width</label>
                <input 
                    type="range" 
                    name="borderWidth" 
                    id="borderWidth"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={borderWidth}
                    onChange={changeHandler}
                />
                {/* <label htmlFor="borderStyles">
                <input 
                  list="borderStyles"
                  name="borderStyles" 
                  defaultValue={borderStyles}
                  onChange={changeHandler}
                />
                </label>
                <datalist 
                  id="borderStyles"
                >
                    <option value="solid"/>
                    <option value="dashed"/>
                    <option value="dotted"/>
                    <option value="double"/>  
                </datalist> */}
                <label>Choose a browser from this list:
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
                    defaultValue={width}
                    onChange={changeHandler}
                />
                <label htmlFor="height">Height</label>
                <input 
                    type="range" 
                    name="height" 
                    id="height"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={height}
                    onChange={changeHandler}
                />
                <label htmlFor="boxShadowHorizontal">Horizontal Box Shadow</label>
                <input 
                    type="range" 
                    name="boxShadowHorizontal" 
                    id="boxShadowHorizontal"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={boxShadowHorizontal}
                    onChange={changeHandler}
                />
                <label htmlFor="boxShadowVertical">Vertical Box Shadow</label>
                <input 
                    type="range" 
                    name="boxShadowVertical" 
                    id="boxShadowVertical"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={boxShadowVertical}
                    onChange={changeHandler}
                />
                <label htmlFor="color">Font Color</label>
                <input 
                    type="color" 
                    name="color" 
                    id="color"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={color}
                    onChange={changeHandler}
                />
                <label htmlFor="backgroundColor">Background Color</label>
                <input 
                    type="color" 
                    name="backgroundColor" 
                    id="backgroundColor"
                    min="0"
                    max="70"
                    step="1"
                    defaultValue={backgroundColor}
                    onChange={changeHandler}
                />
                                  
                
            </form>
        </div>
    )
}

export default Input;