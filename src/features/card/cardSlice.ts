import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    borderRadius: 10,
    borderWidth: 0
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
        }
    }
});

export const { setBorderRadius, setBorderWidth } = cardSlice.actions;

export default cardSlice.reducer;