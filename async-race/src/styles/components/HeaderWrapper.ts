import styled from 'styled-components';
import Wrapper from './Wrapper';

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    column-gap: 3rem;
    font-size: 1.5rem;
  }

  li {
    list-style: none;
  }
`;

export default HeaderWrapper;
