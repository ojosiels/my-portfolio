import styled from "styled-components";

export const StyledHomePage = styled.section`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  width: 93vw;
  gap: 30px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > section {
      border-top: 2px solid var(--grey-300);
      padding: 40px;
      > h2 {
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 25px;
      }
    }
  }
  @media (max-width: 1400px) {
    flex-direction: column-reverse;
    margin-left: 0;
  }
`;
