import { ICarProps } from './CarProps';

export interface IWinnerProps {
  id: number;
  wins: number;
  time: number;
  car: ICarProps;
}
