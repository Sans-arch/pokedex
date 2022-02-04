import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  border: 2px solid #828282;
  border-radius: 4px;
  height: 65vh;
  width: 20vw;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    pointer-events: none;

    /* border: 2px solid red; */
  }
`;
