import styled from "styled-components";

export const StyledAsideInfo = styled.aside`
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: var(--secondary-color);
  min-width: 20vw;
  border-left: 1px solid var(--grey-300);

  button {
    position: absolute;
    right: 0px;
    color: var(--grey-500);

    display: flex;
    background-color: transparent;

    width: fit-content;
    height: fit-content;
    font-size: 2rem;

    margin-left: auto;
    padding: 15px;
    border: none;

    transition: 0.3s;

    :hover {
      color: var(--grey-050);

      transition: 0.3s;
    }
  }

  > section {
    color: var(--grey-500);

    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid var(--grey-500);
    }

    h1 {
      font-weight: 600;
    }
    p {
    }
  }

  .sectionSelector {
    margin-top: 10%;

    li {
      color: var(--grey-500);
      background-color: var(--secondary-color);

      text-align: center;
      padding: 15px;

      border: 5px solid transparent;

      transition: 0.3s;

      :hover {
        color: var(--grey-050);
        border-color: var(--grey-500);
        background-color: var(--grey-500);

        font-weight: 600;

        transition: 0.3s;
      }
    }
  }

  .socialSelector {
    margin-top: 20%;
    display: flex;
    font-size: 2.5rem;
    justify-content: space-evenly;

    a {
      color: var(--grey-500);
      opacity: 0.7;
      transition: 0.3s;

      :hover {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1400px) {
    position: relative;

    height: fit-content;

    display: flex;
    align-items: center;

    .sectionSelector {
      margin: 0;

      display: flex;
      align-items: center;

      li {
        :hover {
          font-weight: 400;
        }
      }
    }

    > section {
      margin: 0;
      img {
        display: none;
      }
    }

    .socialSelector {
      margin: 0;
    }
  }
`;
