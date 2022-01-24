import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWinnerProps } from '../interfaces/WinnerProps';

const initialState: {
  winners: IWinnerProps[];
} = {
  winners: [],
};

const winnerSlice = createSlice({
  name: 'race',
  initialState: initialState,
  reducers: {
    onGetWinners: (state, { payload }: PayloadAction<IWinnerProps[]>) => {
      state.winners = payload;
    },
  },
});

export const winnerReducer = winnerSlice.reducer;
export const { onGetWinners } = winnerSlice.actions;
