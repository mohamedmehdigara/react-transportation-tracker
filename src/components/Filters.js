// Filters.js
import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [delayFilter, setDelayFilter] = useState('');

  const handleChange = event => {
    setDelayFilter(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFilter(delayFilter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={delayFilter} onChange={handleChange}>
        <option value="">All Delays</option>
        <option value="short">Short Delays</option>
        <option value="medium">Medium Delays</option>
        <option value="long">Long Delays</option>
      </select>
      <button type="submit">Apply</button>
    </form>
  );
};

export default Filters;
