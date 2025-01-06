/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
// Memoized Child Component
const Item = React.memo(({ item, onClick }) => {
  console.log(`Item ${item.id} rendered`);
  return <li onClick={() => onClick(item.id)}>{item.name}</li>;
});
Item.displayName = "Item";
Item.propTypes={item:propTypes.object.isRequired,onClick:propTypes.func.isRequired};

const Parent = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Memoized click handler
  const handleClick = useCallback((id) => {
    setSelectedItem(id);
  }, []); // Stable across renders

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onClick={handleClick} />
      ))}
      {selectedItem && <p>Selected Item: {selectedItem}</p>}
    </ul>
  );
};

export default Parent;
