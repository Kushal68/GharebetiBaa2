import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 8rem;
  align-items: center;
  width: 90rem;
`;

const Title = styled.h2`
  font-size: 2rem; /* Title size */
  color: var(--color-orange-600);
  margin: 0; /* Remove default margin */
`;

const Input = styled.input`
  padding: 1rem; /* Thick padding for the input */
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-lg);
  font-size: 1.6rem; /* Font size for input text */
  width: 100%; /* Full width */

  &:focus {
    border-color: var(--color-orange-200); /* Change border color on focus */
    outline: none; /* Remove outline */
  }

  &::placeholder {
    color: var(--color-grey-400); /* Placeholder color */
  }
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <Title>GharBetiBa</Title>
      <Input type="text" placeholder="Search for properties..." />
    </SearchBarContainer>
  );
}

export default SearchBar;
