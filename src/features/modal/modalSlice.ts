import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    borderRadius: 0,
    borderWidth: 1
}

export const modalSlice = createSlice({
    name: 'modal',
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

export const { setBorderRadius, setBorderWidth } = modalSlice.actions;

export default modalSlice.reducer;