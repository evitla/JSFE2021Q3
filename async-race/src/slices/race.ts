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
    },

    onDeleteCar: (state, { payload }: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.id !== payload);
    },
  },
});

export const raceReducer = raceSlice.reducer;
export const { onSaveCars, onGetCar, onCreateCar, onUpdateCar, onDeleteCar } =
  raceSlice.actions;
