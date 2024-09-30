import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import PropTypes from 'prop-types';

const SidebarLayer = styled.aside`
  display: hidden;
  /* background-color: var(--color-grey-0); */
  /* padding: 3.2rem 1.2rem; */
  /* border-right: 1px solid var(--color-grey-100); */
  /* border-right: none; */
  /* grid-row: 1 / -1; */
  /* display: flex;
  flex-direction: column; */
  /* gap: 3.2rem; */
  /* transition: width 0.3s ease-in-out; */
  height: 100vh;
  /* width: 100%; */
  width: 6rem;
  /* z-index: 100; */
  background-color: blue;
`;
const StyledSidebar = styled.aside`
  /* width: 7rem; */
  width: ${(props) => (props.isExpanded ? '20rem' : '6rem')};
  display: flex;
  flex-direction: column;
  /* gap: 3.2rem; */
  transition: width 0.2s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1000;
  border-right: 1px solid var(--color-grey-300);
  /* overflow-x: hidden; */
  /* border: 2rem red; */
  background-color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
`;

function Sidebar({ isExpanded, setIsExpanded }) {
  return (
    <SidebarLayer>
      <StyledSidebar
        isExpanded={isExpanded}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <MainNav isExpanded={isExpanded} />
      </StyledSidebar>
    </SidebarLayer>
  );
}

Sidebar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
};

export default Sidebar;
