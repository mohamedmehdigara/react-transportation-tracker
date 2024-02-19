// Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

// Styling for the map container
const StyledMapContainer = styled(MapContainer)`
  height: 500px;
  width: 100%;
`;

const Map = ({ stops }) => {
  // Set initial position to Tunisia
  const position = [34.0, 9.0];

  // State to manage the selected stop for displaying popup
  const [selectedStop, setSelectedStop] = React.useState(null);

  return (
    <StyledMapContainer center={position} zoom={6} scrollWheelZoom={false}>
      {/* Tile layer for the map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Markers for each stop */}
      {stops.map(stop => (
        <Marker
          key={stop.id}
          position={[stop.latitude, stop.longitude]}
          onClick={() => setSelectedStop(stop)} // Set selected stop on marker click
        >
          {/* Popup for the selected stop */}
          <Popup>
            {/* Popup content */}
            <div>
              <h3>{stop.name}</h3>
              <p>Delay: {stop.delay} min</p>
              {/* Add more information as needed */}
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Popup for the selected stop */}
      {selectedStop && (
        <Popup
          position={[selectedStop.latitude, selectedStop.longitude]}
          onClose={() => setSelectedStop(null)} // Close popup on click outside
        >
          {/* Popup content */}
          <div>
            <h3>{selectedStop.name}</h3>
            <p>Delay: {selectedStop.delay} min</p>
            {/* Add more information as needed */}
          </div>
        </Popup>
      )}
    </StyledMapContainer>
  );
};

export default Map;
