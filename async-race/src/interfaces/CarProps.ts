export interface ICarPropsToCreate {
  name: string;
  color: string;
}

export interface ICarProps extends ICarPropsToCreate {
  id: number;
  velocity: number;
  distance: number;
  successDrive: boolean;
}
