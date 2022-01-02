import React from 'react';
import { StyledButton, StyledCarForm } from '../../styles/components';
import { baseTheme } from '../../styles/theme';

const initialFormData: { model: string; color: string; modelValid: boolean } = {
  model: '',
  color: baseTheme.colors.primary[300],
  modelValid: true,
};

const CarForm = ({
  content,
  isDisabled = false,
}: {
  content: string;
  isDisabled?: boolean;
}) => {
  const [state, setState] = React.useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    name === 'model' && (state.modelValid = value !== '');
    name === 'color' && (baseTheme.colors.primary[300] = value);

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (state.model === '') {
      setState({ ...initialFormData, modelValid: false });
      return;
    }

    console.log(state.model);
    console.log(state.color);
    baseTheme.colors.primary[300] = initialFormData.color;
    setState(initialFormData);
  };

  return (
    <StyledCarForm>
      <input
        type="text"
        name="model"
        className={!state.modelValid ? 'not-valid' : ''}
        value={state.model}
        placeholder="Enter a car model"
        disabled={isDisabled}
        onChange={handleInputChange}
      />
      {!state.modelValid && <span>Not Valid</span>}
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
        onClick={handleSubmit}>
        {content}
      </StyledButton>
    </StyledCarForm>
  );
};

export default CarForm;
