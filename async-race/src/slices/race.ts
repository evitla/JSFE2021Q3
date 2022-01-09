import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICarProps } from '../interfaces/CarProps';

const initialState: {
  cars: ICarProps[];
  selectedCar: ICarProps | null;
} = {
  cars: [
    { id: 1, model: 'BMW', color: 'green' },
    { id: 2, model: 'Ford', color: 'white' },
    { id: 3, model: 'Kia', color: 'red' },
  ],
  selectedCar: null,
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

    deleteCarById: (state, { payload }: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.id !== payload);
    },

    selectCarById: (state, { payload }: PayloadAction<number>) => {
      const selectedCar = state.cars.find((car) => car.id === payload);
      if (selectedCar !== undefined) {
        state.selectedCar = selectedCar;
      }
    },
  },
});

export const raceReducer = raceSlice.reducer;
export const { addCar, updateCar, deleteCarById, selectCarById } =
  raceSlice.actions;
