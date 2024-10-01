import { useState } from "react";
import { personalImage } from "../../parsonal-image";
import "./Personal.sass";
export default function Personal1() {
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
      ? setSlideNumber(personalImage.length - 1)
      : setSlideNumber(slideNumber - 1);
  }
  function handelClickNext() {
    slideNumber + 1 === personalImage.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  }
  return (
    <div>
      {openModal && (
        <div className="slider">
          <a className="btn btn__prev" onClick={handelClickBack}>
          &#10094;
          </a>
          <span className="close" onClick={handelClickClose}>
            &times;
          </span>
          <div className="slider__content">
            <img
              className="fullScreenImage"
              src={personalImage[slideNumber].src}
            />
          </div>
          <a className="btn btn__next" onClick={handelClickNext}>
          &#10095;
          </a>
        </div>
      )}
      <div className="gallery">
        {personalImage &&
          personalImage.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handelOpenModal(index)}
              >
                <img className="peronal-img" src={slide.src} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
