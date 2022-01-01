import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  appearance: none;
  margin: 0 auto;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.14s;
  outline: none;
  text-align: center;
  width: 100%;
  font-family: inherit;

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    box-shadow: none !important;
    animation: disabled-button 0.24s forwards;
  }

  &:active {
    transform: translateY(3px);
  }

  &.button-primary {
    box-shadow: 0 3px 0 0 ${({ theme }) => theme.colors.primary[140]};
    background: ${({ theme }) => theme.colors.primary[130]};
    color: ${({ theme }) => theme.colors.bg};

    &:hover {
      box-shadow: 0 0 3px 2px ${({ theme }) => theme.colors.primary[130]};
    }

    &:active {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary[140]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.primary[100]};
      box-shadow: 0 3px 0 0 ${({ theme }) => theme.colors.primary[140]} !important;
      color: ${({ theme }) => theme.colors.primary[140]};
    }
  }

  @keyframes disabled-button {
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

export default Button;
