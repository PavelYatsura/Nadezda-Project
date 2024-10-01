import PropTypes from "prop-types";
import { useState } from "react";
import "./ImagesSlider.sass";

export default function ImagesSlider({ data }) {
  ImagesSlider.propTypes = {
    data: PropTypes.string,
  };

  const [slide, setSlide] = useState(0);

  const nextSLide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSLide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  console.log(slide);
  console.log(setSlide);
  return (
    <div className="container-carusel">
      <div className="carusel">
        <a className="btn btn__prev btn__black" onClick={prevSLide}>
        &#10094;
        </a>
        {data.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            className={slide === idx ? "slide" : "slide__hidden"}
          ></img>
        ))}
        <a className="btn btn__next btn__black" onClick={nextSLide}>
        &#10095;
        </a>
      </div>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator__inactiv"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}
