import React from "react";
import "./LightBox.css";
import { useState } from "react";

export default function LightBox({ data }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  function handelOpenModal(index) {
    setSlideNumber(index);
    setOpenModal(true);
  }
  function handelClickClose() {
    setOpenModal(false);
  }
  function handelClickBack() {
    slideNumber === 0
      ? setSlideNumber(data.length - 1)
      : setSlideNumber(slideNumber - 1);
  }
  function handelClickNext() {
    slideNumber + 1 === data.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  }
  return (
    <div className="lightbox">
      {openModal && (
        <div className="lightbox__slider">
          <span className="slider__close" onClick={handelClickClose}>
            &times;
          </span>
          <div className="slider__wrapper">
            <a
              className="slider__btn slider__btn_prev "
              onClick={handelClickBack}
            >
              &#10094;
            </a>
            <img
              className="slider__fullScreenImage"
              src={data[slideNumber].src}
            />
            <a className="slider__touchprev" onTouchStart={handelClickBack}></a>
            <a className="slider__touchnext" onTouchStart={handelClickNext}></a>
            <a
              className=" slider__btn slider__btn_next"
              onClick={handelClickNext}
            >
              &#10095;
            </a>
          </div>
        </div>
      )}
      <div className="lightbox__gallery">
        {data &&
          data.map((slide, index) => {
            return (
              <div
                className="lightbox__gallery-single"
                key={index}
                onClick={() => handelOpenModal(index)}
              >
                <img
                  className="lightbox__gallery-img lightbox__gallery-img_hover"
                  src={slide.src}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
