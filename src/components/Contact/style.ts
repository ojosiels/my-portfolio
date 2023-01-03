import styled from "styled-components";

export const StyledContact = styled.section`
  .contactForm {
    margin-top: 2%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;

      margin-bottom: 1rem;
      label {
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }
    }

    input,
    textarea {
      color: var(--black-color);
      background-color: var(--white-color);
      border-color: var(--black-color);
      resize: none;
      padding: 1rem;
      font-family: "Poppins", sans-serif;
      font-size: 1.2rem;
    }

    a {
      color: var(--grey-050);
      background-color: var(--grey-500);

      margin-left: auto;

      padding: 1rem;
      width: fit-content;
      border-radius: 7px;
      transition: 0.3s;

      :hover {
        color: var(--grey-100);
        background-color: var(--grey-400);
        transition: 0.3s;
      }
    }
  }
`;
