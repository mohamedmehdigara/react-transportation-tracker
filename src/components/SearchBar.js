// SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 100%;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search for a stop..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
