import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Stepper from '../features/postProperty/Stepper';
import Layout from '../features/postProperty/Layout';
import Location from '../features/postProperty/Location';
import Details from '../features/postProperty/Details';
import Amenities from '../features/postProperty/Amenities';
import Price from '../features/postProperty/Price';
import Social from '../features/postProperty/Social';
import Modal from '../ui/Modal';
import ConfirmMessage from '../ui/ConfirmMessage';
import { useSelector, useDispatch } from 'react-redux';
import { useCreateProperty } from '../features/postProperty/useCreateProperty';
import { useNavigate } from 'react-router-dom';
import { resetPropertyState } from '../features/postProperty/PropertySlice';
// Main layout
const MainContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: #f0f0f0;
  padding: 2rem;
  /* background-color: red; */
`;

const RightContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--color-brand-500);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: var(--color-brand-700);
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;
const H2 = styled.h2`
  font-size: 2.7;
  /* color: #333; */
  margin-bottom: 2rem;
  color: var(--color-brand-500);
`;
// Main PostProperty component
function PostProperty() {
  const { createProperty, isCreating } = useCreateProperty();
  const [activeStep, setActiveStep] = useState(1);
  const formData = useSelector((state) => state.propertymap);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const steps = [
    'Layout',
    'Location',
    'Details',
    'Amenities',
    'Price',
    'Social & Policies',
  ];
  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handlePrevious = () => {
    setActiveStep((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, 6));
  };
  const handleSubmit = (e) => {
    alert('Form submitted');
    createProperty(formData);
    dispatch(resetPropertyState()); // Dispatch the reset action
    navigate('/home');
  };

  // const handleSubmit = (e) => {
  //   // console.log(formData);
  //   // console.log('Form submitted with the following values:');
  //   // console.log(JSON.stringify(formData, null, 2));
  //   createProperty(formData);
  //   navigate('/home');
  // };

  const renderFormStep = () => {
    switch (activeStep) {
      case 1:
        return <Layout />;
      case 2:
        return <Location />;
      case 3:
        return <Details />;
      case 4:
        return <Amenities />;
      case 5:
        return <Price />;
      case 6:
        return <Social />;
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <H2>List your property</H2>
        <Stepper activeStep={activeStep} onStepClick={handleStepClick} />
      </LeftContainer>
      <RightContainer>
        <div>
          <H2>{steps[activeStep - 1]}</H2>
          {renderFormStep()}
        </div>
        <ButtonContainer>
          <Button onClick={handlePrevious} disabled={activeStep === 1}>
            <ChevronLeft size={20} />
            Previous
          </Button>
          {activeStep === 6 ? (
            <Modal>
              <Modal.Open opens="submit">
                <Button>Submit</Button>
              </Modal.Open>
              <Modal.Window name="submit">
                <ConfirmMessage
                  resourceName="Submit"
                  onConfirm={handleSubmit}
                  message="Are you sure you want to submit the form?"
                />
              </Modal.Window>
            </Modal>
          ) : (
            <Button onClick={handleNext} disabled={activeStep === 6}>
              Next
              <ChevronRight size={20} />
            </Button>
          )}
        </ButtonContainer>
      </RightContainer>
    </MainContainer>
  );
}

export default PostProperty;
