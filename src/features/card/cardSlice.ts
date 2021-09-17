import { createSlice } from "@reduxjs/toolkit";
import { BUTTON, CARD } from "../../app/componentConstants";


export const cardInitialState = {
    customStyle:{
        borderRadius: '10',
        borderWidth: '1',
        borderStyles:"solid",
        width:18,
        height:"fit-content",
        color:"black",
        backgroundColor:"white",
        boxShadowHorizontal:0,
        boxShadowVertical:0,
    }
}

export const buttonInitialState = {
    
    customStyle:{
        borderRadius: '30',
        borderWidth: '2',
        borderStyles:"solid",
        width:'fit-content',
        height:"fit-content",
        color:"white",
        backgroundColor:"blue",
        boxShadowHorizontal:0,
        boxShadowVertical:0,
    }
}


const createComponentSlice = (config:{name: string, initialState: any}) => {
    let {name, initialState} = config
    return createSlice({
        name,
        initialState,
        reducers: {
            setComponentProperty: (state, action) => {
                state.customStyle = action.payload
            }
        }}
        )
}

export const cardSlice = createComponentSlice({name: CARD, initialState: cardInitialState});
export const buttonSlice = createComponentSlice({name: BUTTON, initialState: buttonInitialState});


export const cardActions = cardSlice.actions;
export const buttonActions = buttonSlice.actions;

// export default cardSlice.reducer;
export const cardReducer = cardSlice.reducer;
export const buttonReducer = buttonSlice.reducer;

