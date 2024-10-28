import { useState } from "react";
import "./ImagesSlider.css";
import React from "react";

export default function ImagesSlider({ data }) {
  const [slide, setSlide] = useState(0);
  const nextSLide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSLide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="container imageslider">
      <div className="imageslider__wrapper">
        <a
          className="btn imageslider__btn imageslider__btn_prev "
          onClick={prevSLide}
        >
          &#10094;
        </a>
        
        <div className="imageslider__image-wrapper">
          {data.map((item, idx) => (
            <img
              key={idx}
              src={item.src}
              alt={item.alt}
              className={
                slide === idx
                  ? "imageslider__slide"
                  : "imageslider__slide_hidden"
              }
            ></img>
          ))}
        </div>
        <a className="touchprev" onTouchStart={prevSLide}></a>
        <a className="touchnext" onTouchStart={nextSLide}></a>
        <a
          className="btn imageslider__btn imageslider__btn_next "
          onClick={nextSLide}
        >
          &#10095;
        </a>
      </div>
      <span className="imageslider__indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx
                  ? "imageslider__indicator"
                  : "imageslider__indicator imageslider__indicator_inactiv"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}
