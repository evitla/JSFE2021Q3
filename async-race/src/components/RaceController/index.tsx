import React from 'react';
import { useDispatch } from 'react-redux';
import { ICarProps } from '../../interfaces/CarProps';
import { onCreateCar, onUpdateCar } from '../../slices/race';
import { StyledButton, StyledRaceController } from '../../styles/components';
import { createCar, updateCar } from '../../utils';
import CarForm from './CarForm';
import { URL } from '../../constants';

const RaceController = ({ selectedCar }: { selectedCar: ICarProps | null }) => {
  const dispatch = useDispatch();

  const handleCreate = (name: string, color: string) => {
    createCar(URL, { name, color }).then((data) => dispatch(onCreateCar(data)));
  };

  const handleUpdate = (name: string, color: string) => {
    if (selectedCar !== null) {
      const updatedCar = { ...selectedCar, name, color };
      updateCar(URL, updatedCar).then((data) => dispatch(onUpdateCar(data)));
    }
  };

  return (
    <StyledRaceController>
      <CarForm content="Create" onCreateCar={handleCreate} />
      <CarForm
        content="Update"
        isDisabled={selectedCar === null}
        onUpdateCar={handleUpdate}
      />
      <StyledButton className="button-primary">Generate Cars</StyledButton>
    </StyledRaceController>
  );
};

export default RaceController;
