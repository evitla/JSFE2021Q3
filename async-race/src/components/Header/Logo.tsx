import React from 'react';

import { StyledLogo } from '../../styles/components';

const Logo = ({ logo }: { logo: string }) => (
  <StyledLogo>
    <img src={logo} alt="logo" />
    <h1>Async-Race</h1>
  </StyledLogo>
);

export default Logo;
