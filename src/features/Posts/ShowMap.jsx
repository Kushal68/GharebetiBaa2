import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

function ShowMap({ geoJson }) {
  const [data, setData] = useState(geoJson);

  // Extract the first coordinate from the polygon
  const getCenterCoordinates = (geoJson) => {
    if (geoJson && geoJson.features.length > 0) {
      const coordinates = geoJson.features[0].geometry.coordinates[0];
      return [coordinates[1][1], coordinates[1][0]]; // [latitude, longitude]
    }
    return [28.3949, 84.124]; // Default coordinates if none found
  };

  const center = getCenterCoordinates(data);

  // Style function for the GeoJSON layer
  const geoJsonStyle = (feature) => ({
    color: 'blue', // Change to your desired color
    weight: 2,
    opacity: 1,
    fillOpacity: 0.2,
  });

  return (
    <div>
      <MapContainer
        center={center}
        zoom={17}
        style={{ height: '80vh' }}
        scrollWheelZoom={false}
        // zoomControl="disabled"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Load GeoJSON data */}
        <GeoJSON data={data} style={geoJsonStyle} />
      </MapContainer>
    </div>
  );
}

export default ShowMap;
