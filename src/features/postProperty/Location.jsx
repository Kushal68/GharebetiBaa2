import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { saveLocation } from './PropertySlice';
import Button from '../../ui/Button';
import L from 'leaflet';

// New styled components for form elements
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const MapWrapper = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 1rem;
`;

function Location() {
  const dispatch = useDispatch();
  const locationData = useSelector((state) => state.propertymap.location); // Get location data from Redux
  const [markerPosition, setMarkerPosition] = useState([28.209499, 83.959518]); // Marker position state
  const [loading, setLoading] = useState(false); // Loading state for reverse geocoding

  // Set initial marker position if latitude and longitude exist in Redux
  useEffect(() => {
    if (locationData?.latitude && locationData?.longitude) {
      setMarkerPosition({
        lat: locationData.latitude,
        lng: locationData.longitude,
      });
    }
  }, [locationData]);

  // Function to perform reverse geocoding using Nominatim API
  const reverseGeocode = async (lat, lng) => {
    setLoading(true); // Start loading when fetching address
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      );
      const address = response.data.address;
      // console.log('Address:', address); // Log the address details

      // Update location data with the received address details
      dispatch(
        saveLocation({
          ...locationData,
          street: `${address.road || ''} ${address.neighbourhood || ''}`,
          city: address.city || address.town || address.village || '',
          district: address.county || '',
          latitude: lat,
          longitude: lng,
        }),
      );
    } catch (error) {
      console.error('Error in reverse geocoding:', error);
    } finally {
      setLoading(false); // Stop loading after request is completed
    }
  };

  function SetMapCenter({ position }) {
    const map = useMap();

    useEffect(() => {
      if (position) {
        map.setView(position, map.getZoom()); // Center map at the marker position
      }
    }, [position, map]);

    return null;
  }

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      saveLocation({
        ...locationData,
        [name]: value,
      }),
    );
  };

  // Custom component to add a marker on map click
  function AddMarkerToClick() {
    useMapEvents({
      click(e) {
        const latLng = e.latlng;

        // Save latitude and longitude to Redux
        dispatch(
          saveLocation({
            ...locationData,
            latitude: latLng.lat,
            longitude: latLng.lng,
          }),
        );

        // Update marker position in local state
        setMarkerPosition(latLng);

        // Perform reverse geocoding to get the address from lat/lng
        reverseGeocode(latLng.lat, latLng.lng);

        // console.log('LatLng:', latLng); // Log the clicked location's latitude and longitude
      },
    });

    // Render the marker if markerPosition is available
    return markerPosition ? <Marker position={markerPosition}></Marker> : null;
  }

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="street">Street Address</Label>
        <Input
          type="text"
          id="street"
          name="street"
          value={locationData?.street || ''}
          onChange={handleInputChange}
          disabled={loading} // Disable input if reverse geocoding is loading
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="city">City</Label>
        <Input
          type="text"
          id="city"
          name="city"
          value={locationData?.city || ''}
          onChange={handleInputChange}
          disabled={loading} // Disable input if reverse geocoding is loading
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="district">District</Label>
        <Input
          type="text"
          id="district"
          name="district"
          value={locationData?.district || ''}
          onChange={handleInputChange}
          disabled={loading} // Disable input if reverse geocoding is loading
        />
      </FormGroup>
      <FormGroup>
        <Label>Place a Marker on the Map</Label>
        <MapWrapper>
          <MapContainer
            center={markerPosition} // Default center or marker position
            zoom={13}
            style={{ height: '300px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <SetMapCenter position={markerPosition} />
            <AddMarkerToClick />
          </MapContainer>
        </MapWrapper>
      </FormGroup>
    </Form>
  );
}

export default Location;
