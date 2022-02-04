import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;
  width: 90vw;
  height: 90vh;
  border-radius: 6px;

  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, .5);


  & h1#mainTitle {
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 3rem;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
