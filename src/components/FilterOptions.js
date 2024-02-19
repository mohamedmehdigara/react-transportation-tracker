// FilterOptions.js
import React from 'react';
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

const FilterOptions = ({ options, selectedOption, onSelectChange }) => {
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
    </FilterContainer>
  );
};

export default FilterOptions;
