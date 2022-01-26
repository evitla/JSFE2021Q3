import React from 'react';
import { useDispatch } from 'react-redux';
import { ICarProps } from '../../interfaces/CarProps';
import {
  onCreateCar,
  onGenerateCars,
  onStartDrive,
  onStartEngine,
  onStopEngine,
  onUpdateCar,
} from '../../slices/car';
import { onRaceStart, onRaceStop } from '../../slices/race';
import { StyledButton, StyledRaceController } from '../../styles/components';
import {
  createCar,
  generateCars,
  saveWinner,
  startDriving,
  startEngine,
  startRace,
  stopEngine,
  updateCar,
} from '../../utils';
import CarForm from './CarForm';
import {
  GENERATE_CARS_COUNT,
  GARAGE_URL,
  ENGINE_URL,
  WINNERS_URL,
} from '../../constants';

const RaceController = ({
  cars,
  selectedCar,
}: {
  cars: ICarProps[];
  selectedCar: ICarProps | null;
}) => {
  const dispatch = useDispatch();

  const handleCreate = async (name: string, color: string) => {
    const newCar = await createCar(GARAGE_URL, { name, color });
    dispatch(onCreateCar(newCar));
  };

  const handleUpdate = async (name: string, color: string) => {
    if (selectedCar !== null) {
      const newCar = await updateCar(GARAGE_URL, {
        ...selectedCar,
        name,
        color,
      });
      dispatch(onUpdateCar(newCar));
    }
  };

  const handleGenerateCars = async () => {
    const generatedCars = generateCars(GENERATE_CARS_COUNT);
    const newCars = await Promise.all(
      generatedCars.map((car) => createCar(GARAGE_URL, car))
    );
    dispatch(onGenerateCars(newCars));
  };

  const handleStartRace = async () => {
    dispatch(onRaceStart());

    const promises = cars.map(async (car) => {
      const { velocity, distance } = await startEngine(ENGINE_URL, car.id);
      dispatch(onStartEngine({ id: car.id, velocity, distance }));

      const data = await startDriving(ENGINE_URL, {
        id: car.id,
        velocity,
        distance,
      });
      dispatch(onStartDrive({ id: car.id, success: data.success }));

      return data;
    });

    const { carId, duration } = await startRace(
      promises,
      cars.map((car) => car.id)
    );

    await saveWinner(WINNERS_URL, carId, Number(duration));

    dispatch(onRaceStop());
  };

  const handleStopRace = async () => {
    dispatch(onRaceStop());
    await Promise.all(
      cars.map(async (car) => {
        await stopEngine(ENGINE_URL, car.id);
        dispatch(onStopEngine(car.id));
      })
    );
  };

  return (
    <StyledRaceController>
      <CarForm content="Create" onCreateCar={handleCreate} />
      <CarForm
        content="Update"
        isDisabled={selectedCar === null}
        onUpdateCar={handleUpdate}
      />
      <div style={{ display: 'flex' }}>
        <StyledButton className="button-primary" onClick={handleStartRace}>
          Start Race
        </StyledButton>
        <StyledButton className="button-primary" onClick={handleStopRace}>
          Reset
        </StyledButton>
        <StyledButton className="button-primary" onClick={handleGenerateCars}>
          Generate Cars
        </StyledButton>
      </div>
    </StyledRaceController>
  );
};

export default RaceController;
