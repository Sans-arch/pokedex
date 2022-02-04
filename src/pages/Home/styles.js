import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  /* border: 1px solid red; */

  div + div {
    margin-left: 6rem;
  }
`;

export const CardsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  /* border: 1px solid blue; */
`;
