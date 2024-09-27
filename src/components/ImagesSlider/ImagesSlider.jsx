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

  return (
    <div className="container-carusel">
      <div className="carusel">
        <button className="btn btn__back" onClick={prevSLide}>
          back
        </button>
        {data.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            className={slide === idx ? "slide" : "slide__hidden"}
          ></img>
        ))}
        <button className="btn btn__next" onClick={nextSLide}>
          next
        </button>
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
