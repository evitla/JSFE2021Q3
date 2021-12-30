import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

import { Wrapper } from '../../styles/components';

import logo from '../../assets/images/logo.svg';

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
`;

const Header = () => (
  <header>
    <HeaderWrapper>
      <Logo logo={logo} />
    </HeaderWrapper>
  </header>
);

export default Header;
