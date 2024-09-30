import styled from 'styled-components';

// Stepper styles
const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: right; */
  gap: 7rem;
  position: relative;
  /* background-color: blue; */
  width: 100%;
  padding: 1rem 2rem 1rem 14rem;
  /* height: 100%; */
  /* text-align: center; */
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  /* text-align: center; */
`;

const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) =>
    props.active || props.completed ? 'var(--color-brand-700)' : '#ccc'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
`;

const StepLabel = styled.div`
  font-size: 1.6rem;
  color: ${(props) => (props.active ? 'var(--color-brand-700)' : '#666')};
`;

const StepLine = styled.div`
  position: absolute;
  top: 30px;
  left: 15px;
  width: 2px;
  height: calc(100% + 46px);
  background-color: ${(props) =>
    props.active ? 'var(--color-brand-700)' : '#ccc'};
  z-index: 0;
`;

function Stepper({ activeStep, onStepClick }) {
  const steps = [
    'Layout',
    'Location',
    'Details',
    'Amenities',
    'Price',
    'Social & Policies',
  ];

  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepCircle
            active={index + 1 === activeStep}
            completed={index + 1 < activeStep}
            onClick={() => onStepClick(index + 1)}
          >
            {index + 1}
          </StepCircle>
          <StepLabel active={index + 1 === activeStep}>{step}</StepLabel>
          {index < steps.length - 1 && (
            <StepLine active={index + 1 < activeStep} />
          )}
        </Step>
      ))}
    </StepperContainer>
  );
}
export default Stepper;
