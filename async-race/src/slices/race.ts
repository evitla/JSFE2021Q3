import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICarProps } from '../interfaces/CarProps';

const initialState: {
  cars: ICarProps[];
  selectedCar: ICarProps | null;
} = {
  cars: [],
  selectedCar: null,
};

const raceSlice = createSlice({
  name: 'race',
  initialState: initialState,
  reducers: {
    onSaveCars: (state, { payload }: PayloadAction<ICarProps[]>) => {
      state.cars = payload;
    },

    onGetCar: (state, { payload }: PayloadAction<number>) => {
      const car = state.cars.find((c) => c.id === payload);
      if (car !== undefined) {
        state.selectedCar = car;
      }
    },

    onCreateCar: (state, { payload }: PayloadAction<ICarProps>) => {
      state.cars.push(payload);
    },

    onUpdateCar: (state, { payload }: PayloadAction<ICarProps>) => {
      const selectedCarIndex = state.cars.findIndex(
        (car) => car.id === payload.id
      );
      state.cars[selectedCarIndex] = payload;
      state.selectedCar = null;
    },

    onDeleteCar: (state, { payload }: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.id !== payload);
    },

    onStartEngine: (
      state,
      {
        payload,
      }: PayloadAction<{ id: number; velocity: number; distance: number }>
    ) => {
      const index = state.cars.findIndex((c) => c.id === payload.id);
      state.cars[index] = { ...state.cars[index], ...payload };
    },

    onStopEngine: (state, { payload }: PayloadAction<{ id: number }>) => {
      const index = state.cars.findIndex((c) => c.id === payload.id);
      state.cars[index] = { ...state.cars[index], velocity: 0, distance: 0 };
    },
  },
});

export const raceReducer = raceSlice.reducer;
export const {
  onSaveCars,
  onGetCar,
  onCreateCar,
  onUpdateCar,
  onDeleteCar,
  onStartEngine,
  onStopEngine,
} = raceSlice.actions;
