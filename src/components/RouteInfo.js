// RouteInfo.js
import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  margin-top: 20px;
`;

const RouteName = styled.h2`
  margin-bottom: 10px;
`;

const StopList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StopItem = styled.li`
  margin-bottom: 5px;
`;

const AlertMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const RouteInfo = ({ route }) => {
  const { name, stops, alerts } = route;

  return (
    <InfoContainer>
      <RouteName>{name}</RouteName>
      <StopList>
        {stops.map(stop => (
          <StopItem key={stop.id}>{stop.name}</StopItem>
        ))}
      </StopList>
      {alerts && alerts.length > 0 && (
        <AlertMessage>
          Alerts: {alerts.map(alert => alert.message).join(', ')}
        </AlertMessage>
      )}
    </InfoContainer>
  );
};

export default RouteInfo;
