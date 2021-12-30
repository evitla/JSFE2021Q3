import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NavLinks } from '../../constants';
import { StyledListItem } from '../../styles/components';

const ListItem = ({ item }: { item: string }) => {
  const { pathname } = useLocation();

  const isActive = pathname === NavLinks[item];

  return (
    <StyledListItem active={isActive}>
      <Link to={NavLinks[item]}>{item}</Link>
    </StyledListItem>
  );
};

export default ListItem;
