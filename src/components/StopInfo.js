// StopInfo.js
import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StopInfo = ({ stop }) => {
  return (
    <InfoContainer>
      <h2>{stop.name}</h2>
      <p>Delay: {stop.delay} min</p>
      {/* Add more information as needed */}
    </InfoContainer>
  );
};

export default StopInfo;
