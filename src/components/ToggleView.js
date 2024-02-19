// ToggleView.js
import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  margin-top: 20px;
`;

const ToggleView = ({ onViewChange }) => {
  return (
    <ToggleContainer>
      <button onClick={() => onViewChange('map')}>Map View</button>
      <button onClick={() => onViewChange('list')}>List View</button>
    </ToggleContainer>
  );
};

export default ToggleView;
