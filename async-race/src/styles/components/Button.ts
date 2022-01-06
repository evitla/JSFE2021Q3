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

  &:active {
    transform: translateY(3px);
  }

  &.medium-button {
    padding: 0.25em 0.5em;
  }

  &.small-button {
    padding: 0.25em;
  }

  &.button-primary {
    box-shadow: 0 3px 0 0 ${({ theme }) => theme.colors.primary[140]};
    background: ${({ theme }) => theme.colors.primary[130]};
    color: ${({ theme }) => theme.colors.bg};

    &:active {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary[140]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.primary[100]};
      box-shadow: 0 3px 0 0 ${({ theme }) => theme.colors.primary[140]};
      color: ${({ theme }) => theme.colors.primary[140]};
    }
  }

  &.button-success {
    box-shadow: 0 3px 0 0 ${({ theme }) => theme.colors.primary[310]};
    background: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.font};

    &:disabled {
      opacity: 0.8;
    }
  }

  &.button-danger {
    box-shadow: 0 3px 0 0 ${({ theme }) => theme.colors.primary[210]};
    background: ${({ theme }) => theme.colors.primary[200]};
    color: ${({ theme }) => theme.colors.font};

    &:disabled {
      opacity: 0.8;
    }
  }
`;

export default Button;
