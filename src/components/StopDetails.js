// StopDetails.js
import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const StopName = styled.span`
  font-weight: bold;
`;

const ArrivalTime = styled.span``;

const Route = styled.span``;

const StopDetails = ({ stop }) => {
  return (
    <DetailsContainer>
      <DetailRow>
        <StopName>{stop.name}</StopName>
        <ArrivalTime>Arrival: {stop.arrivalTime}</ArrivalTime>
      </DetailRow>
      <DetailRow>
        <Route>Route: {stop.route}</Route>
      </DetailRow>
    </DetailsContainer>
  );
};

export default StopDetails;
