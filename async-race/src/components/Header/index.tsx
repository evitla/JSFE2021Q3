import React from 'react';

import Logo from './Logo';
import Navbar from './Navbar';

import { HeaderWrapper } from '../../styles/components';

import logo from '../../assets/images/logo.svg';

const Header = () => (
  <header>
    <HeaderWrapper>
      <Logo logo={logo} />
      <Navbar items={['Race', 'Winners']} />
    </HeaderWrapper>
  </header>
);

export default Header;
