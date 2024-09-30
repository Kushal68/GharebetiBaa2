import React, { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { useMoveBack } from '../hooks/useMoveBack';
// import { useMoveBack } from '../../hooks/useMoveBack';

function Map() {
  const moveBack = useMoveBack();
  const [drawnShapes, setDrawnShapes] = useState([]);

  const handleDrawCreate = (e) => {
    const layer = e.layer;
    const shapeData = layer.toGeoJSON();
    setDrawnShapes([...drawnShapes, shapeData]);
    console.log('Shape Data:', shapeData);
  };

  const handleDrawDelete = (e) => {
    const { layers } = e;
    layers.eachLayer((layer) => {
      setDrawnShapes((prevShapes) =>
        prevShapes.filter((shape) => shape.id !== layer._leaflet_id),
      );
    });
  };

  const handleSave = () => {
    moveBack();
  };

  return (
    <div>
      <MapContainer
        center={[28.2096, 83.9856]}
        zoom={13}
        style={{ height: '80vh' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleDrawCreate}
            onDeleted={handleDrawDelete}
            draw={{
              rectangle: true,
              circle: false,
              polyline: false,
              marker: true,
            }}
          />
        </FeatureGroup>
      </MapContainer>
      <button onClick={handleSave}>Save</button> {/* Save Button */}
    </div>
  );
}

export default Map;
