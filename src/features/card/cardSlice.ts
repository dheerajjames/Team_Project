import { createSlice } from "@reduxjs/toolkit";
import { BUTTON, CARD } from "../../app/componentConstants";


export const cardInitialState = {
    borderRadius: '10',
    borderWidth: '0'
}

export const buttonInitialState = {
    borderRadius: '30',
    borderWidth: '0'
}

// export const cardSlice = createSlice({
//     name: 'card',
//     initialState,
//     reducers: {
//         setBorderRadius: (state, action) => {
//             state.borderRadius = action.payload
//         },
//         setBorderWidth: (state, action) => {
//             state.borderWidth = action.payload
//         }
//     }
// });

const createComponentSlice = (config:{name: string, initialState: any}) => {
    let {name, initialState} = config
    return createSlice({
        name,
        initialState,
        reducers: {
            setBorderRadius: (state, action) => {
                state.borderRadius = action.payload
            },
            setBorderWidth: (state, action) => {
                state.borderWidth = action.payload
            
            }
        }}
        )
}

export const cardSlice = createComponentSlice({name: CARD, initialState: cardInitialState});
export const buttonSlice = createComponentSlice({name: BUTTON, initialState: buttonInitialState});


// export const buttonSlice = createSlice({
//     name: 'button',
//     initialState,
//     reducers: {
//         setBorderRadius: (state, action) => {
//             state.borderRadius = action.payload
//         },
//         setBorderWidth: (state, action) => {
//             state.borderWidth = action.payload
//         }
//     }
// });

// export const { setBorderRadius, setBorderWidth } = cardSlice.actions;
// export const { setBorderRadius, setBorderWidth } = buttonSlice.actions

export const cardActions = cardSlice.actions;
export const buttonActions = buttonSlice.actions;

// export default cardSlice.reducer;
export const cardReducer = cardSlice.reducer;
export const buttonReducer = buttonSlice.reducer;