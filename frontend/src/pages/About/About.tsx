import React from "react";
import { ABOUT } from "../../images.js";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="container about">
        <div className="about__wrapper">
          <img className="about__img" src={ABOUT.src} />
          <div>
            <p className="about__text">
              Я занимаюсь фотографией больше 10 лет. Мне нравится чистый и
              лаконичный стиль. Также я начала практиковаться в ретуши и в
              конечном итоге стала заниматься ей на профессиональной основе.
            </p>
            <br />
            <p>Контакты:</p>
            <a className="about__link" href="https://t.me/nadia_yatsura">
              telegram nadia_yatsura
            </a>
            <br />
            <a className="about__link" href="mailto:yatsuranadezda@gmail.com">
              yatsuranadezda@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
