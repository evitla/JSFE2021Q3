import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CARS_PER_PAGE } from '../constants';
import { ICarProps } from '../interfaces/CarProps';

const initialState: {
  cars: ICarProps[];
  selectedCar: ICarProps | null;
  isRaceStarted: boolean;
  count: number;
  racePage: number;
} = {
  cars: [],
  selectedCar: null,
  isRaceStarted: false,
  count: 0,
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

    onSaveCars: (
      state,
      { payload }: PayloadAction<{ cars: ICarProps[]; count: number }>
    ) => {
      state.cars = payload.cars;
      state.count = payload.count;
    },

    onGetCar: (state, { payload }: PayloadAction<number>) => {
      const car = state.cars.find((c) => c.id === payload);
      if (car !== undefined) {
        state.selectedCar = car;
      }
    },

    onCreateCar: (state, { payload }: PayloadAction<ICarProps>) => {
      if (state.cars.length < CARS_PER_PAGE) {
        state.cars.push(payload);
      }
      state.count++;
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
      state.count--;
    },

    onGenerateCars: (state, { payload }: PayloadAction<ICarProps[]>) => {
      state.cars.push(...payload.slice(0, CARS_PER_PAGE - state.cars.length));
      state.count += payload.length;
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

    onNextPage: (state) => {
      state.racePage++;
    },

    onPrevPage: (state) => {
      state.racePage--;
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
  onGenerateCars,
  onStartEngine,
  onStopEngine,
  onStartDrive,
  onNextPage,
  onPrevPage,
} = raceSlice.actions;
