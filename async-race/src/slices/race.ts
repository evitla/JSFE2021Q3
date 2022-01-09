import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICarProps } from '../interfaces/CarProps';

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
  reducers: {
    addCar: (state, { payload }: PayloadAction<ICarProps>) => {
      state.cars.push(payload);
    },

    updateCar: (state, { payload }: PayloadAction<ICarProps>) => {
      const selectedCarIndex = state.cars.findIndex(
        (car) => car.id === payload.id,
      );
      state.cars[selectedCarIndex] = payload;
    },
  },
});

export const raceReducer = raceSlice.reducer;
export const { addCar, updateCar } = raceSlice.actions;
