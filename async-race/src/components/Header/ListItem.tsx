import React from 'react';
import { Link } from 'react-router-dom';

import { NavLinks } from '../../constants';
import { StyledListItem } from '../../styles/components';

const ListItem = ({ item, active, onSelect }: ListProps) => {
  return (
    <StyledListItem active={active} onClick={onSelect}>
      <Link to={NavLinks[item]}>{item}</Link>
    </StyledListItem>
  );
};

export default ListItem;

type ListProps = {
  item: string;
  active: boolean;
  onSelect: () => void;
};
