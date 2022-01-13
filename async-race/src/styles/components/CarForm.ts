import styled from 'styled-components';

const CarForm = styled.form<{ pickedColor: string }>`
  display: flex;
  column-gap: 0.375rem;

  input {
    border-radius: 4px;
    height: inherit;
    font-family: inherit;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.font};

    &::placeholder {
      color: ${({ theme }) => theme.colors.font};
      opacity: 0.7;
    }

    &.not-valid {
      animation: not-valid 0.24s forwards;
    }
  }

  input[type='text'] {
    padding: 0.25em;
    width: 50%;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary[200]};

    &:hover,
    &:focus,
    &:active {
      box-shadow: 0 0 3px 2px ${({ theme }) => theme.colors.primary[200]};
      outline: none;
    }

    &:disabled {
      box-shadow: none;
    }
  }

  input[type='color'] {
    width: 12%;
    border: 1px solid ${({ pickedColor }) => pickedColor};
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      box-shadow: 0 0 3px 2px ${({ pickedColor }) => pickedColor};
      outline: none;
    }

    &:disabled {
      cursor: default;
      box-shadow: none;
    }

    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border-color: transparent;
    }
  }

  button {
    width: 38%;
  }

  @keyframes not-valid {
    0% {
      transform: translateX(0);
    }
    14% {
      transform: translateX(-2px);
    }
    28% {
      transform: translateX(0);
    }
    42% {
      transform: translateX(2px);
    }
    56% {
      transform: translateX(0);
    }
    84% {
      transform: translateX(-2px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default CarForm;
