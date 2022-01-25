import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  isRaceStarted: boolean;
  racePage: number;
} = {
  isRaceStarted: false,
  racePage: 1,
};

const raceSlice = createSlice({
  name: 'race',
  initialState: initialState,
  reducers: {
    onRaceStart: (state) => {
      state.isRaceStarted = true;
    },

    onRaceStop: (state) => {
      state.isRaceStarted = false;
    },

    onNextPage: (state) => {
      state.racePage++;
    },

    onPrevPage: (state) => {
      state.racePage--;
    },
  },
});

export const raceReducer = raceSlice.reducer;
export const { onRaceStart, onRaceStop, onNextPage, onPrevPage } =
  raceSlice.actions;
