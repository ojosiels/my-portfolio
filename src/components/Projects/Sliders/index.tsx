import React, { useState } from "react";
import { StyledSlider } from "./style.";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

interface iSlide {
  image: string;
  title: string;
}

interface iSliderProps {
  slides: iSlide[];
  link: string;
}

const Slider = ({ slides, link }: iSliderProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    const length = slides.length;
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    const length = slides.length;
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider className="slider">
      <button onClick={prevSlide}>
        <MdNavigateBefore />
      </button>

      {slides.map((elem, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <a href={link} target="_blank">
                <img
                  src={elem.image}
                  alt={elem.title}
                  className="image"
                  title={elem.title}
                />
              </a>
            )}
          </div>
        );
      })}

      <button onClick={nextSlide}>
        <MdNavigateNext />
      </button>
    </StyledSlider>
  );
};

export default Slider;
