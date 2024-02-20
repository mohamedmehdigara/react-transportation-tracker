// RealTimeTracker.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import StopInfo from './StopInfo';
import Sidebar from './Sidebar';
import DelayChart from './DelayChart';
import ToggleView from './ToggleView';
import SearchBar from './SearchBar'; // Import SearchBar component here
import Filters from './Filters';
import Notification from './Notification';

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
  const [notification, setNotification] = useState(null);

  // Function to handle stop selection
  const handleSelectStop = stop => {
    setSelectedStop(stop);
  };

  // Function to handle view change
  const handleViewChange = selectedView => {
    setView(selectedView);
  };

  // Function to handle search
  const handleSearch = searchTerm => {
    // Logic to filter stops based on search term
    const filteredStops = mockStops.filter(stop =>
      stop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setStops(filteredStops);
  };

  // Function to handle filtering by delay
  const handleFilter = delayFilter => {
    // Logic to filter stops based on delay
    let filteredStops = [...mockStops];
    if (delayFilter === 'short') {
      filteredStops = filteredStops.filter(stop => stop.delay <= 5);
    } else if (delayFilter === 'medium') {
      filteredStops = filteredStops.filter(stop => stop.delay > 5 && stop.delay <= 15);
    } else if (delayFilter === 'long') {
      filteredStops = filteredStops.filter(stop => stop.delay > 15);
    }
    setStops(filteredStops);
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
        <SearchBar onSearch={handleSearch} /> {/* Integrate SearchBar component here */}
        <Filters onFilter={handleFilter} />
        <DelayChart stops={stops} />
        {notification && <Notification message={notification} />}
        {selectedStop && <StopInfo stop={selectedStop} />}
      </div>
    </Container>
  );
};

export default RealTimeTracker;
