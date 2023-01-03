import React from "react";
import { StyledAboutMe } from "./style";
import texts from "../../data/TextsData";

const AboutMe: React.FC = () => {
  return (
    <StyledAboutMe id="about">
      <h2>About me</h2>
      <p>
        Hello, my name is <strong>Josiel S. Borges</strong>, I am a brazillian
        junior web developer
      </p>
      <p>{texts.about.p1}</p>
      <p id="pAboutP2">{texts.about.p2}</p>
    </StyledAboutMe>
  );
};

export default AboutMe;
