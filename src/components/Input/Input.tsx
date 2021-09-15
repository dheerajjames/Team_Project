import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setBorderRadius, setBorderWidth } from '../../features/card/cardSlice';

import styles from './Input.module.css'


const Input = () => {

    const {
        borderRadius,
        borderWidth
    } = useSelector((state: RootState) => state.card);
    const dispatch = useDispatch();
    // console.log('state');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('event target',event.target.name)
        switch(event.target.name){
            case 'borderRadius':
                dispatch(setBorderRadius(event.target.value));
                break;
            case 'borderWidth':
                dispatch(setBorderWidth(event.target.value));
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
            </form>
        </div>
    )
}

export default Input;