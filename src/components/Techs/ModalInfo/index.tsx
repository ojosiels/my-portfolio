import React, { Dispatch, SetStateAction } from "react";
import { StyledModalInfoContainer, StyledModalInfo } from "./style";
import { AiOutlineClose } from "react-icons/ai";

interface iModalInfoProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  text: string;
  title: string;
}

const ModalInfo = ({ setModal, text, title }: iModalInfoProps) => {
  const textBlock = text.split(".");
  return (
    <StyledModalInfoContainer>
      <StyledModalInfo>
        <div id="headerDiv">
          <h2>{title}</h2>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div id="textDiv">
          {textBlock.map((elem) => (
            <p>{elem}</p>
          ))}
        </div>
      </StyledModalInfo>
    </StyledModalInfoContainer>
  );
};

export default ModalInfo;
