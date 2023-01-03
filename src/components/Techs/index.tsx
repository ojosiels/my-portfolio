import React, { useState } from "react";
import { StyledTechs } from "./style";
import {
  SiReact,
  SiTypescript,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import texts from "../../data/TextsData";
import ModalInfo from "./ModalInfo";

const Techs: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <StyledTechs id="techs">
      <h2>Techlogies</h2>
      <p>{texts.techs.p1}</p>

      <ul>
        <li
          onClick={() => {
            setModal(true);
            setModalText(texts.techs.react);
            setModalTitle("React");
          }}
        >
          <SiReact className="icon" />
          <h3>React</h3>
        </li>

        <li
          onClick={() => {
            setModal(true);
            setModalText(texts.techs.ts);
            setModalTitle("Typescript");
          }}
        >
          <SiTypescript className="icon" />
          <h3>Typescript</h3>
        </li>

        <li
          onClick={() => {
            setModal(true);
            setModalText(texts.techs.git);
            setModalTitle("Git");
          }}
        >
          <SiGit className="icon" />
          <h3>Git</h3>
        </li>

        <li
          onClick={() => {
            setModal(true);
            setModalText(texts.techs.js);
            setModalTitle("Javascript");
          }}
        >
          <SiJavascript className="icon" />
          <h3>Javascript</h3>
        </li>

        <li
          onClick={() => {
            setModal(true);
            setModalText(texts.techs.html);
            setModalTitle("HTML");
          }}
        >
          <SiHtml5 className="icon" />
          <h3>HTML</h3>
        </li>

        <li
          onClick={() => {
            setModal(true);
            setModalText(texts.techs.css);
            setModalTitle("CSS");
          }}
        >
          <SiCss3 className="icon" />
          <h3>CSS</h3>
        </li>
      </ul>

      {modal ? (
        <ModalInfo setModal={setModal} text={modalText} title={modalTitle} />
      ) : (
        ""
      )}
    </StyledTechs>
  );
};

export default Techs;
