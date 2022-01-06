import React, { useState, useEffect } from 'react';
import './search.css';

export default function Search({ updateFilteredRobots }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    updateFilteredRobots(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      className='search-bar'
      type='search'
      placeholder='Search robots...'
      value={value}
      onChange={handleChange}
    />
  );
}
