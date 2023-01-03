import styled from "styled-components";

export const StyledSlider = styled.section`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    height: fit-content;

    font-size: 3rem;
    color: var(--grey-500);

    cursor: pointer;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 0.3s;
    transform: scale(0.98);
  }

  .image {
    height: 300px;
    width: 500px;
    object-fit: cover;
  }
`;
