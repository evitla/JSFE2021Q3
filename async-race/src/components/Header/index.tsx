import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import Navbar from './Navbar';

import { HeaderWrapper } from '../../styles/components';

import logo from '../../assets/images/logo.svg';

const Header = () => (
  <header>
    <HeaderWrapper>
      <Link to="/">
        <Logo logo={logo} />
      </Link>
      <Navbar items={['Race', 'Winners']} />
    </HeaderWrapper>
  </header>
);

export default Header;
