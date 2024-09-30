import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.7rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/profile')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={() => navigate('/cart')}>
          <HiOutlineShoppingCart />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
