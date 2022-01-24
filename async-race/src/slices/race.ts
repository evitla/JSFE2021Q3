import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICarProps } from '../interfaces/CarProps';

const initialState: {
  cars: ICarProps[];
  selectedCar: ICarProps | null;
  isRaceStarted: boolean;
} = {
  cars: [],
  selectedCar: null,
  isRaceStarted: false,
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

    onStopEngine: (state, { payload }: PayloadAction<number>) => {
      const index = state.cars.findIndex((c) => c.id === payload);
      state.cars[index] = { ...state.cars[index], velocity: 0, distance: 0 };
    },

    onStartDrive: (
      state,
      { payload }: PayloadAction<{ id: number; success: boolean }>
    ) => {
      const index = state.cars.findIndex((c) => c.id === payload.id);
      state.cars[index] = {
        ...state.cars[index],
        successDrive: payload.success,
      };
    },
  },
});

export const raceReducer = raceSlice.reducer;
export const {
  onRaceStart,
  onRaceStop,
  onSaveCars,
  onGetCar,
  onCreateCar,
  onUpdateCar,
  onDeleteCar,
  onStartEngine,
  onStopEngine,
  onStartDrive,
} = raceSlice.actions;
