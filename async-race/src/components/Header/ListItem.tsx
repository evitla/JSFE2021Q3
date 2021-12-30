import React from 'react';
import { StyledListItem } from '../../styles/components';

const ListItem = ({ item, active, onSelect }: ListProps) => {
  return (
    <StyledListItem active={active} onClick={onSelect}>
      {item}
    </StyledListItem>
  );
};

export default ListItem;

type ListProps = {
  item: string;
  active: boolean;
  onSelect: () => void;
};
