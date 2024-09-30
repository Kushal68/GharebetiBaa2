import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { savePrice } from './PropertySlice';

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

function Description() {
  const dispatch = useDispatch();
  const priceData = useSelector((state) => state.propertymap.price) || {}; // Ensure priceData is an object

  // Handle input changes and update Redux on every change
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    // console.log(name, value);
    if (type === 'number') {
      dispatch(
        savePrice({
          ...priceData,
          [name]: Number(value),
        }),
      );
    } else {
      dispatch(
        savePrice({
          ...priceData,
          [name]: value,
        }),
      );
    }
  };

  // Handle checkbox change for negotiable price
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    dispatch(
      savePrice({
        ...priceData,
        isNegotiable: checked, // Store the checkbox state
      }),
    );
  };

  return (
    <Form>
      {/* Price Input */}
      <FormGroup>
        <Label htmlFor="price">Price (Nrs.)</Label>
        <Input
          type="number"
          id="price"
          name="price"
          value={priceData.price || ''} // Use an empty string if price is undefined
          onChange={handleInputChange}
          placeholder="Enter the price"
        />
      </FormGroup>

      {/* Negotiable Checkbox */}
      <FormGroup>
        <Label>
          <Checkbox
            type="checkbox"
            name="isNegotiable"
            checked={priceData.isNegotiable || false} // Default to false if undefined
            onChange={handleCheckboxChange}
          />
          Is the price negotiable?
        </Label>
      </FormGroup>

      {/* Payment Frequency */}
      <FormGroup>
        <Label htmlFor="paymentFrequency">Payment Frequency</Label>
        <Select
          id="paymentFrequency"
          name="paymentFrequency"
          value={priceData.paymentFrequency || ''} // Default to an empty string if undefined
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select frequency
          </option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="everyThreeMonths">Every 3 Months</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="electricityPayment">Electricity Payment</Label>
        <Select
          id="electricityPayment"
          name="electricityPayment"
          value={priceData.electricityPayment || ''} // Default to an empty string if undefined
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Paid by
          </option>
          <option value="owner">Owner</option>
          <option value="tenant">Tenant</option>
          <option value="shared">Shared</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="waterPayment">Water Payment</Label>
        <Select
          id="waterPayment"
          name="waterPayment"
          value={priceData.waterPayment || ''} // Default to an empty string if undefined
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Paid by
          </option>
          <option value="owner">Owner</option>
          <option value="tenant">Tenant</option>
          <option value="shared">Shared</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="wifiPayment">Internet Payment</Label>
        <Select
          id="wifiPayment"
          name="wifiPayment"
          value={priceData.wifiPayment || ''} // Default to an empty string if undefined
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Paid by
          </option>
          <option value="owner">Owner</option>
          <option value="tenant">Tenant</option>
          <option value="shared">Shared</option>
        </Select>
      </FormGroup>
    </Form>
  );
}

export default Description;
