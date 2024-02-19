// RealTimeTracker.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from './Map';
import StopInfo from './StopInfo';
import Sidebar from './Sidebar';
import DelayChart from './DelayChart';
import ToggleView from './ToggleView';

// Mock data for demonstration
const mockStops = [
  { id: 1, name: 'Stop 1', delay: 0, latitude: 34.0, longitude: 9.0 },
  { id: 2, name: 'Stop 2', delay: 2, latitude: 34.1, longitude: 9.1 },
  { id: 3, name: 'Stop 3', delay: 5, latitude: 34.2, longitude: 9.2 },
];

const Container = styled.div`
  display: flex;
`;

const RealTimeTracker = () => {
  const [stops, setStops] = useState(mockStops);
  const [selectedStop, setSelectedStop] = useState(null);
  const [view, setView] = useState('map'); // Default view is map

  // Function to handle stop selection
  const handleSelectStop = stop => {
    setSelectedStop(stop);
  };

  // Function to handle view change
  const handleViewChange = selectedView => {
    setView(selectedView);
  };

  return (
    <Container>
      <Sidebar stops={stops} onSelectStop={handleSelectStop} />
      {view === 'map' ? (
        <Map stops={stops} selectedStop={selectedStop} />
      ) : (
        <div>
          <h2>List View</h2>
          {/* Add list view component here if needed */}
        </div>
      )}
      <div>
        <ToggleView onViewChange={handleViewChange} />
        <DelayChart stops={stops} />
        {selectedStop && <StopInfo stop={selectedStop} />}
      </div>
    </Container>
  );
};

export default RealTimeTracker;
