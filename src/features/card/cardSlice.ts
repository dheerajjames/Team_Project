import { createSlice } from "@reduxjs/toolkit";
import { FaBlackberry } from "react-icons/fa";

const initialState = {
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


export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setBorderRadius: (state, action) => {
            state.borderRadius = action.payload
        },
        setBorderWidth: (state, action) => {
            state.borderWidth = action.payload
        },
        setBorderStyles: (state, action) => {
            state.borderStyles = action.payload
        },
        setWidth: (state, action) => {
            state.width = action.payload
        },
        setHeight: (state, action) => {
            state.height = action.payload
        },
        setColor: (state, action) => {
            state.color = action.payload
        },
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        setBoxShadowHorizontal: (state, action) => {
            state.boxShadowHorizontal = action.payload
        },
        setBoxShadowVertical: (state, action) => {
            state.boxShadowVertical = action.payload
        }
 
   
    }
});

export const { 
    setBorderRadius,
     setBorderWidth ,
     setBorderStyles,
     setBackgroundColor,
     setColor,
     setBoxShadowHorizontal,
     setBoxShadowVertical,
     setHeight,
     setWidth} = cardSlice.actions;

export default cardSlice.reducer;