import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';
import { useState } from 'react';
import SidebarPlaceholder from './SidebarPlaceholder';
const StyledAppLayout = styled.div`
  display: flex;
  /* display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr; */
  height: 100vh;
`;
const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Main = styled.main`
  background-color: var(--color-grey-100);
  padding: 2rem 2rem;
  height: 100%;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 92%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <StyledAppLayout>
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        {/* <SidebarPlaceholder /> */}
        <StyleMain>
          <Header />
          <Main>
            <Container>
              <Outlet />
            </Container>
          </Main>
        </StyleMain>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
