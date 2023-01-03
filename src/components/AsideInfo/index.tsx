import React, { useContext } from "react";
import { StyledAsideInfo } from "./style";

import { GrGithub, GrLinkedin } from "react-icons/gr";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { ColorModesContext } from "../../contexts/ColorModesContext";

const AsideInfo = () => {
  const { currentTheme, changeTheme } = useContext(ColorModesContext);

  return (
    <StyledAsideInfo>
      <button onClick={changeTheme}>
        {currentTheme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </button>
      <section>
        <img
          src="/assets/images/profile.jpg"
          alt="Night City"
          title="Night City"
        />
        <h1>Josiel S. Borges</h1>
        <p>Junior Web Developer</p>
      </section>

      <ul className="sectionSelector">
        <a href="#about">
          <li>About me</li>
        </a>

        <a href="#techs">
          <li>Known Technologies</li>
        </a>

        <a href="#projects">
          <li>Projects</li>
        </a>

        <a href="#experience">
          <li>Experience</li>
        </a>

        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>

      <ul className="socialSelector">
        <a href="https://github.com/ojosiels" target="_blank">
          <li>
            <GrGithub />
          </li>
        </a>

        <a href="https://www.linkedin.com/in/ojosiels/" target="_blank">
          <li>
            <GrLinkedin />
          </li>
        </a>
      </ul>
    </StyledAsideInfo>
  );
};

export default AsideInfo;
