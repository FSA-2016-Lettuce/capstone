import React from 'react';
// What I'm importing below are the built-in react components to create the map
import {
  useMap,
  useMapEvent,
  useMapEvents,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';

const MapWithRoute = (props) => {
  // Child component of MapContainer inherits props from MapContainer
  const map = useMap();
  const routeStart = props.routePath[0];
  // Center map view at the beginning of the Route
  map.setView(routeStart, 14);

  return (
    <div>
      <Marker position={props.routePath[0]}>
        {/* Popup creates the popup you see when you click on the parent
        component (in this case, marker). Note that within the popup, you can
        use HTML tags to style the popup. Or you can just include text like you see here. See Run component for example of using HTML tags */}
        <Popup>Starting point for the awesome run!</Popup>
      </Marker>
      {/* Polyline takes in the array of points and makes the path! */}
      <Polyline pathOptions={{ color: 'blue' }} positions={props.routePath} />
    </div>
  );
};

export default MapWithRoute;
