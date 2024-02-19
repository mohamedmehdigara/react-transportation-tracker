// components/StopItem.js
import React from 'react';
import styled from 'styled-components';

const StopListItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StopName = styled.span`
  font-weight: bold;
`;

const StopDelay = styled.span`
  color: ${({ delay }) => (delay > 0 ? 'red' : 'green')};
`;

const StopItem = ({ stop }) => {
  return (
    <StopListItem>
      <StopName>{stop.name}</StopName>
      <StopDelay delay={stop.delay}>
        {stop.delay === 0 ? 'On time' : `${stop.delay} min delay`}
      </StopDelay>
    </StopListItem>
  );
};

export default StopItem;
