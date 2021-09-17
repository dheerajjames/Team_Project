import { createSlice } from "@reduxjs/toolkit";
import { BUTTON, CARD , MODAL} from "../../app/componentConstants";


export const cardInitialState = {
    customStyle:{
        borderRadius: 10,
        borderWidth: 1,
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
        borderWidth: '0',
        borderStyles:"solid",
        width:18,
        height:"fit-content",
        color:"black",
        backgroundColor:"white",
        boxShadowHorizontal:0,
        boxShadowVertical:0,
    }
}

export const modalInitialState = {
    
    customStyle:{
        borderRadius: '0',
        borderWidth: '1',
        borderStyles:"solid",
        width:40,
        height:"fit-content",
        color:"black",
        backgroundColor:"white",
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
export const modalSlice = createComponentSlice({name: MODAL, initialState: modalInitialState});



export const cardActions = cardSlice.actions;
export const buttonActions = buttonSlice.actions;
export const modalActions = modalSlice.actions;


// export default cardSlice.reducer;
export const cardReducer = cardSlice.reducer;
export const buttonReducer = buttonSlice.reducer;
export const modalReducer = modalSlice.reducer;


