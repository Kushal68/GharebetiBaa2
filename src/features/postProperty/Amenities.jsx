import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { saveAmenities } from './PropertySlice';

// Styled components for form layout and styling
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1.5rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

// The main Amenities component
function Amenities() {
  const dispatch = useDispatch();
  const amenitiesData = useSelector(
    (state) => state.propertymap.amenities || { amenities: [] },
  );

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    let updatedAmenities;

    if (checked) {
      updatedAmenities = [...amenitiesData.amenities, name]; // Add amenity
    } else {
      updatedAmenities = amenitiesData.amenities.filter(
        (item) => item !== name,
      ); // Remove amenity
    }

    dispatch(
      saveAmenities({
        ...amenitiesData,
        amenities: updatedAmenities,
      }),
    );
  };

  // Categories of amenities
  const categories = {
    Cooling: ['Fan', 'Window'],
    Appliances: [
      'Dishwasher',
      'Freezer',
      'Refrigerator',
      'Washing Machine',
      'Television',
      'Wifi',
    ],
    Flooring: ['Carpet', 'Tile', 'Cement'],
    Parking: ['Bike parking', 'Car parking'],
  };

  return (
    <Form>
      {/* Dynamically render each category with its respective amenities */}
      {Object.entries(categories).map(([category, amenities]) => (
        <FormGroup key={category}>
          <Label>{category}</Label>
          <CheckboxGroup>
            {amenities.map((amenity) => (
              <CheckboxLabel key={amenity}>
                <Checkbox
                  type="checkbox"
                  name={amenity}
                  checked={amenitiesData.amenities.includes(amenity)}
                  onChange={handleInputChange}
                />
                {amenity}
              </CheckboxLabel>
            ))}
          </CheckboxGroup>
        </FormGroup>
      ))}
    </Form>
  );
}

export default Amenities;
