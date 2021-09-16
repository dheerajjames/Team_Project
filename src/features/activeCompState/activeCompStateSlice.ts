import { createSlice } from "@reduxjs/toolkit";
import { CARD } from "../../app/componentConstants";

const initialState = {
    activeComp: CARD
};

export const activeCompSlice = createSlice({
    name: 'activeCompState',
    initialState,
    reducers: {
        setActiveComponent: (state, action) => {
            state.activeComp = action.payload
        }
    }
});

export const {setActiveComponent} = activeCompSlice.actions;
export const activeCompReducer = activeCompSlice.reducer;