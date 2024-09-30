import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { saveLayout } from './PropertySlice';
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

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;
// Layout component
const PropertyLayout = styled.div`
  display: ${(props) => (props.decision ? 'flex' : 'none')};
  /* display: flex; */
  gap: 2rem;
`;
const LayoutDescription = styled.div`
  width: 50%;
`;
const LayoutDiagram = styled.div`
  width: 50%;
`;
function Layout() {
  const dispatch = useDispatch();
  const layoutData = useSelector((state) => state.propertymap.layout);
  //   console.log(layoutData);
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    // console.log(name, value);
    if (type === 'number') {
      dispatch(
        saveLayout({
          ...layoutData,
          [name]: Number(value),
        }),
      );
    } else {
      dispatch(
        saveLayout({
          ...layoutData,
          [name]: value,
        }),
      );
    }
  };

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="propertyType">Property Type</Label>
        <Select
          id="propertyType"
          name="propertyType"
          value={layoutData?.propertyType || ''}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a property type</option>
          <option value="entireHouse">Entire House</option>
          <option value="flat">Flat</option>
          <option value="room">Room</option>
          <option value="sharedRoom">Shared Room</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="selectLayout">Select Layout</Label>
        <Select
          id="selectLayout"
          name="selectLayout"
          value={layoutData?.selectLayout || ''}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a Layout</option>
          <option value="two">2 Rooms</option>
          <option value="three">3 Rooms</option>
          <option value="four">4 Rooms</option>
        </Select>
      </FormGroup>
      <PropertyLayout
        decision={layoutData?.propertyType && layoutData?.selectLayout}
      >
        <LayoutDescription>
          <FormGroup>
            <Label htmlFor="roomNumber">Room to Rent out:</Label>
            <Select
              id="roomNumber"
              name="roomNumber"
              value={layoutData?.roomNumber || ''}
              onChange={handleInputChange}
              required
            >
              <option value="first">First</option>
              <option value="second">Second</option>
              {(layoutData?.selectLayout === 'three' ||
                layoutData?.selectLayout === 'four') && (
                <option value="third">Third</option>
              )}
              {layoutData?.selectLayout === 'four' && (
                <option value="fourth">Fourth</option>
              )}
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bathrooms">Number of Bathrooms</Label>
            <Input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={layoutData?.bathrooms || ''}
              onChange={handleInputChange}
              min="0"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="floor">Floor Number</Label>
            <Input
              type="number"
              id="floor"
              name="floor"
              value={layoutData?.floor || ''}
              onChange={handleInputChange}
              min="0"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="area">Approx. Area (m.sq)</Label>
            <Input
              type="number"
              id="area"
              name="area"
              value={layoutData?.area || ''}
              onChange={handleInputChange}
              min="0"
            />
          </FormGroup>
        </LayoutDescription>
        <LayoutDiagram>Layout</LayoutDiagram>
      </PropertyLayout>
    </Form>
  );
}

export default Layout;
