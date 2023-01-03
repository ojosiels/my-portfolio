import styled from "styled-components";

export const StyledModalInfoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #00000070;
  z-index: 100;
`;

export const StyledModalInfo = styled.section`
  position: relative;
  top: 35%;
  margin: auto;
  width: 30vw;
  font-size: 1.5rem;

  border: 3px solid var(--grey-500);
  border-radius: 15px;

  #headerDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    border-radius: 15px 15px 0 0;
    color: var(--grey-500);
    background-color: var(--grey-050);

    h2 {
      font-weight: 600;
    }

    button {
      font-size: 2rem;
      padding: 0;

      color: var(--grey-500);
      background-color: transparent;

      cursor: pointer;

      border: none;
    }
  }
  #textDiv {
    border-radius: 0 0 15px 15px;

    p {
      background-color: var(--grey-500);
      color: var(--grey-050);
      padding: 15px;
    }
  }
`;
