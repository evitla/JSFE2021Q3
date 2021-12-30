import styled from 'styled-components';

const ListItem = styled.li<{ active: boolean }>`
  list-style: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: ${({ theme }) => theme.colors.font};
    transition: width 0.25s;
  }
`;

export default ListItem;
