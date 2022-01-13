import React from 'react';
import { StyledButton, StyledCarForm } from '../../styles/components';
import { baseTheme } from '../../styles/theme';

const initialFormData: { model: string | null; color: string } = {
  model: null,
  color: baseTheme.colors.picker,
};

const CarForm = ({
  content,
  isDisabled = false,
  onCreateCar = () => {},
  onUpdateCar = () => {},
}: CarFormProps) => {
  const [state, setState] = React.useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'color') {
      baseTheme.colors.picker = value;
    }

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (!state.model) {
      setState({ ...initialFormData, model: '' });
      return;
    }

    onCreateCar(state.model, state.color);
    onUpdateCar(state.model, state.color);

    baseTheme.colors.picker = initialFormData.color;
    setState(initialFormData);
  };

  return (
    <StyledCarForm>
      <input
        type="text"
        name="model"
        className={state.model === '' ? 'not-valid' : ''}
        value={state.model || ''}
        placeholder="Enter a car model"
        disabled={isDisabled}
        onChange={handleInputChange}
      />
      {state.model === '' && <span>Not Valid</span>}
      <input
        type="color"
        name="color"
        value={state.color}
        title="Choose color"
        disabled={isDisabled}
        onChange={handleInputChange}
      />
      <StyledButton
        className="button-primary"
        type="submit"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        {content}
      </StyledButton>
    </StyledCarForm>
  );
};

export default CarForm;

type CarFormProps = {
  content: string;
  isDisabled?: boolean;
  onCreateCar?: (model: string, color: string) => void;
  onUpdateCar?: (model: string, color: string) => void;
};
