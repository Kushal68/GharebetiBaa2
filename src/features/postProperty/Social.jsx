import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { saveSocial } from './PropertySlice';
import { useState } from 'react';

// Styled components for form elements
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
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

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const CalendarInput = styled(Input)`
  cursor: pointer;
`;

function Description() {
  const dispatch = useDispatch();
  const socialData = useSelector((state) => state.propertymap.social) || {};
  const [expiryDate, setExpiryDate] = useState('');

  // Handle input changes and update Redux on every change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      saveSocial({
        ...socialData,
        [name]: value,
      }),
    );
  };

  // Handle checkbox change for pet policy
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedPets = checked
      ? [...(socialData.pets || []), name]
      : (socialData.pets || []).filter((pet) => pet !== name);

    dispatch(
      saveSocial({
        ...socialData,
        pets: updatedPets, // Store the pet policy state
      }),
    );
  };

  // Handle expiry date selection
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setExpiryDate(selectedDate);
    dispatch(
      saveSocial({
        ...socialData,
        expiryDate: selectedDate,
      }),
    );
  };

  return (
    <Form>
      {/* Contact Number */}
      <FormGroup>
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={socialData.contactNumber || ''}
          onChange={handleInputChange}
          placeholder="Enter contact number"
        />
      </FormGroup>

      {/* Contact Email */}
      <FormGroup>
        <Label htmlFor="contactEmail">Contact Email</Label>
        <Input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={socialData.contactEmail || ''}
          onChange={handleInputChange}
          placeholder="Enter contact email"
        />
      </FormGroup>

      {/* Pet Policy */}
      <FormGroup>
        <Label>Pet Policy</Label>
        {['cat', 'dog', 'dinosaur'].map((pet) => (
          <label key={pet}>
            <Checkbox
              type="checkbox"
              name={pet}
              checked={socialData.pets?.includes(pet) || false}
              onChange={handleCheckboxChange}
            />
            {pet.charAt(0).toUpperCase() + pet.slice(1)}{' '}
            {/* Capitalize first letter */}
          </label>
        ))}
      </FormGroup>

      {/* Housemate Name */}
      <FormGroup>
        <Label htmlFor="housemateName">Housemate Name</Label>
        <Input
          type="text"
          id="housemateName"
          name="housemateName"
          value={socialData.housemateName || ''}
          onChange={handleInputChange}
          placeholder="Enter housemate name"
          required
        />
      </FormGroup>

      {/* Expiry Date */}
      <FormGroup>
        <Label htmlFor="expiryDate">Expiry Date</Label>
        <CalendarInput
          type="date"
          id="expiryDate"
          name="expiryDate"
          value={socialData.expiryDate || expiryDate}
          onChange={handleDateChange}
        />
      </FormGroup>
    </Form>
  );
}

export default Description;
