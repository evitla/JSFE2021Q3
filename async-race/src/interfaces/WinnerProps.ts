import { ICarProps } from './CarProps';

export interface IWinnerPropsToCreate {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnerProps extends IWinnerPropsToCreate {
  car: ICarProps;
}
