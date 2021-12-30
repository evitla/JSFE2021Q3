import React from 'react';
import ListItem from './ListItem';

const Navbar = ({ items }: { items: string[] }) => (
  <nav>
    <ul>
      {items.map((item) => (
        <ListItem key={item} item={item} />
      ))}
    </ul>
  </nav>
);

export default Navbar;
