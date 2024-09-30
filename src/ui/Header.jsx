import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';
import Button from './Button';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import ConfirmMessage from './ConfirmMessage';
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  /* gap: 2.4rem; */
  justify-content: space-between; /* Distributes space between items */
  align-items: center;
  /* justify-content: flex-end; */
`;
const HeaderRight = styled.div`
  /* background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100); */

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const navigate = useNavigate();
  const handleClick = function () {
    console.log('Button clicked');
    navigate('/postProperty');
  };
  // resetPropertyState: (state) => {
  //   // Reset state back to initial values
  //   return initialState;
  // },
  return (
    <StyledHeader>
      <SearchBar />
      <HeaderRight>
        <UserAvatar />
        <HeaderMenu />
        <Modal>
          <Modal.Open opens="submit">
            <Button size="medium" variation="primary">
              Post property
            </Button>
          </Modal.Open>
          <Modal.Window name="submit">
            <ConfirmMessage
              resourceName="Post Property"
              onConfirm={handleClick}
              message="Do you want to list your property?"
            />
          </Modal.Window>
        </Modal>
      </HeaderRight>
    </StyledHeader>
  );
}

export default Header;
