import React, { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useSelector } from 'react-redux';
import { useCreatePost } from '../Posts/useCreatePost';
function Map() {
  const { createPost, isCreating } = useCreatePost();
  const moveBack = useMoveBack();
  const roomData = useSelector((state) => state.postmap.roomData);
  const [geoJson, setgeoJson] = useState([]);
  const dataSent = {
    title: 'Hello World',
    roomNumbers: 12,
    preferredFloor: 1,
    location: 'asdas',
    description: 'asdas asdasd',
    geoJson: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          coordinates: [
            [83.9908836023489, 28.22418680892295],
            [83.98395774195677, 28.21977942224376],
            [83.99813848485542, 28.21273064059524],
            [83.99811342794828, 28.220797164268845],
            [83.99069157019414, 28.223932687752054],
          ],
          type: 'LineString',
        },
      },
    ],
  };
  console.log(dataSent);

  const handleDrawCreate = (e) => {
    const layer = e.layer;
    const shapeData = layer.toGeoJSON();
    setgeoJson([...geoJson, shapeData]);
    // console.log('Shape Data:', shapeData);
  };

  const handleDrawDelete = (e) => {
    const { layers } = e;
    layers.eachLayer((layer) => {
      setgeoJson((prevShapes) =>
        prevShapes.filter((shape) => shape.id !== layer._leaflet_id),
      );
    });
  };

  const handleSave = () => {
    console.log({ ...roomData, geoJson });
    createPost(
      { ...roomData, geoJson },
      {
        onSuccess: (data) => {
          console.log(data);
          moveBack();
        },
      },
    );
    // Ensure geoJson is properly structured as GeoJSON object
    // const payload = {
    //   ...roomData,
    //   geoJson: geoJson.map((shape) => ({
    //     ...shape,
    //     geometry: {
    //       ...shape.geometry,
    //       // Ensure coordinates are properly formatted as an array of arrays of numbers
    //       coordinates: shape.geometry.coordinates,
    //     },
    //   })),
    // };
    // console.log(payload);
    // createPost(payload, {
    //   onSuccess: (data) => {
    //     console.log(data);
    //     moveBack();
    //   },
    // });
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
