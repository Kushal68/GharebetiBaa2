import styled from 'styled-components';
import Button from './Button';
import Heading from './Heading';

const StyledConfirmMessage = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmMessage({
  message,
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}) {
  function handleClick() {
    onConfirm();
    onCloseModal();
    // console.log('Button clicked');
    // navigate('/postProperty');
  }
  //we have access to the onCloseModal beacause remb that we cloned and placed the onCloseModal property in the children prop...
  return (
    <StyledConfirmMessage>
      <Heading as="h3"> {resourceName}</Heading>
      <p>{message}</p>

      <div>
        <Button disabled={disabled} onClick={onCloseModal} size="small">
          Cancel
        </Button>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={handleClick}
          size="small"
        >
          Confirm
        </Button>
      </div>
    </StyledConfirmMessage>
  );
}
export default ConfirmMessage;
