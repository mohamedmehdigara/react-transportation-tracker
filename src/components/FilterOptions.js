// FilterOptions.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  padding: 8px;
  font-size: 16px;
`;

const FilterInput = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FilterOptions = ({ options, selectedOption, onSelectChange, onSubmit }) => {
  const [customValue, setCustomValue] = useState('');

  const handleInputChange = event => {
    setCustomValue(event.target.value);
  };

  const handleButtonClick = () => {
    onSubmit(customValue);
  };

  return (
    <FilterContainer>
      <FilterLabel>Filter by:</FilterLabel>
      <FilterSelect value={selectedOption} onChange={onSelectChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FilterSelect>
      <FilterInput type="text" value={customValue} onChange={handleInputChange} />
      <FilterButton onClick={handleButtonClick}>Apply</FilterButton>
    </FilterContainer>
  );
};

export default FilterOptions;
