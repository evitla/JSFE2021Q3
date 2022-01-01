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
  }
`;

export default Button;
