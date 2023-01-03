import styled from "styled-components";

export const StyledTechs = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 90%;
    gap: 15%;
    padding: 10px;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;

      padding: 10px;
      border-radius: 5px;

      font-size: 1.4rem;

      margin-top: 20px;
      margin-bottom: 10px;
      cursor: pointer;

      .icon {
        color: var(--grey-500);
      }

      h3 {
        font-weight: 600;
      }

      :hover {
        background-color: var(--grey-500);
        .icon {
          color: var(--grey-050);
        }

        h3 {
          color: var(--grey-050);
        }
      }
    }
  }
`;
