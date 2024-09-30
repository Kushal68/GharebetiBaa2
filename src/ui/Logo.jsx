import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 100%;
  /* display: inline-block; */
  /* text-align: left; */
  /* background-color: blue; */
`;

const Img = styled.img`
  height: 5.6rem;
  width: auto;
  /* text-align: left; */
  /* height: 6rem;
  width: 2rem; */
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
