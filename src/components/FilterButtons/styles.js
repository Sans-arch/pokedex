import styled from 'styled-components';

export const FilterButtonsContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;

  button {
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: none;

    & + button {
      margin-right: 2rem;
    }
  }
`;

export const PreviousButton = styled.button`
  &::after {
    content: "Previous";
  }

  background-color: #008CBA;
  color: #fff;
`;

export const NextButton = styled.button`
  &::after {
    content: "Next";
  }

  background-color: #4CAF50;
  color: #fff;
`;
