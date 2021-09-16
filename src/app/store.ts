import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { activeCompReducer } from '../features/activeCompState/activeCompStateSlice';
import {cardReducer, buttonReducer} from '../features/card/cardSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    button: buttonReducer,
    activeComp: activeCompReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
