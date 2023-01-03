import React from "react";
import AboutMe from "../../components/AboutMe";
import AsideInfo from "../../components/AsideInfo";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Techs from "../../components/Techs";
import { StyledHomePage } from "./style";

const HomePage: React.FC = () => {
  return (
    <StyledHomePage>
      <div>
        <AboutMe />
        <Techs />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <AsideInfo />
    </StyledHomePage>
  );
};

export default HomePage;
