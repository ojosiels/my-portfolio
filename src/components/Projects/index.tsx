import React from "react";
import Slider from "./Sliders";
import { StyledProjects } from "./style";
import {
  nuKenzieSlides,
  josisBurguerSlides,
  kenzieHubSlides,
} from "../../data/ProjectImages";

import texts from "../../data/TextsData";

const Projects: React.FC = () => {
  return (
    <StyledProjects id="projects">
      <h2>Projects</h2>
      <p>
        Some projects i've accomplished in my journey as a front-end web
        developer
      </p>
      <section className="sectionSliders">
        <Slider slides={nuKenzieSlides} link={texts.projects[0].link} />
        <div>
          <h3>{texts.projects[0].title}</h3>
          <p>{texts.projects[0].p}</p>
        </div>
      </section>

      <section className="sectionSliders">
        <Slider slides={josisBurguerSlides} link={texts.projects[1].link} />
        <div>
          <h3>{texts.projects[1].title}</h3>
          <p>{texts.projects[1].p}</p>
        </div>
      </section>

      <section className="sectionSliders">
        <Slider slides={kenzieHubSlides} link={texts.projects[2].link} />
        <div>
          <h3>{texts.projects[2].title}</h3>
          <p>{texts.projects[2].p}</p>
        </div>
      </section>
    </StyledProjects>
  );
};
export default Projects;
