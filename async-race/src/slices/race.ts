import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cars: [
    { id: 1, model: 'BMW', color: 'green' },
    { id: 2, model: 'Ford', color: 'white' },
    { id: 3, model: 'Kia', color: 'red' },
  ],
};

const raceSlice = createSlice({
  name: 'race',
  initialState: initialState,
  reducers: {},
});

export const raceReducer = raceSlice.reducer;
