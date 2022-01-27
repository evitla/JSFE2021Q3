import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICarProps } from '../interfaces/CarProps';
import { IWinnerProps } from '../interfaces/WinnerProps';
import { TSortBy, TSortOrder } from '../utils';

const initialState: {
  winners: IWinnerProps[];
  winner: { car: ICarProps; time: number } | null;
  winnersPage: number;
  sortBy: TSortBy;
  sortOrder: TSortOrder;
} = {
  winners: [],
  winner: null,
  winnersPage: 1,
  sortBy: 'id',
  sortOrder: 'ASC',
};

const winnerSlice = createSlice({
  name: 'winner',
  initialState: initialState,
  reducers: {
    onGetWinners: (state, { payload }: PayloadAction<IWinnerProps[]>) => {
      state.winners = payload;
    },

    onSaveWinner: (
      state,
      { payload }: PayloadAction<{ car: ICarProps; time: number }>
    ) => {
      state.winner = payload;
    },

    onNextPage: (state) => {
      state.winnersPage++;
    },

    onPrevPage: (state) => {
      state.winnersPage--;
    },

    onSort: (
      state,
      { payload }: PayloadAction<{ sortBy: TSortBy; sortOrder: TSortOrder }>
    ) => {
      state.sortBy = payload.sortBy;
      state.sortOrder = payload.sortOrder;
    },
  },
});

export const winnerReducer = winnerSlice.reducer;
export const { onGetWinners, onSaveWinner, onPrevPage, onNextPage, onSort } =
  winnerSlice.actions;
