import styled from 'styled-components';
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 1.2rem;
  border-right: 9px solid black;
  /* grid-row: 1 / -1; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: all 0.2s ease;
  height: 100vh;
  width: 100%;
`;

function SidebarPlaceholder() {
  return <StyledSidebar>Hello</StyledSidebar>;
}

export default SidebarPlaceholder;
