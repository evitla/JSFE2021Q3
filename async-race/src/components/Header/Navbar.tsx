import React from 'react';
import ListItem from './ListItem';

const Navbar = ({ items }: { items: string[] }) => {
  const [activeItem, setActiveItem] = React.useState('Race');

  const handleSelect = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav>
      <ul>
        {items.map((item) => (
          <ListItem
            key={item}
            item={item}
            active={item === activeItem}
            onSelect={() => handleSelect(item)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
