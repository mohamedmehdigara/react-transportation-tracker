// Sidebar.js
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f2f2f2;
`;

const StopItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Sidebar = ({ stops, onSelectStop }) => {
  return (
    <SidebarContainer>
      <h2>Stops</h2>
      {stops.map(stop => (
        <StopItem key={stop.id} onClick={() => onSelectStop(stop)}>
          {stop.name}
        </StopItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
