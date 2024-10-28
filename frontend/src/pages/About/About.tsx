import React from "react";
import { ABOUT } from "../../images.js";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="about__wrapper">
          <img className="about__img" src={ABOUT.src} />
          <div>
            <p className="about__text">
              Я занимаюсь фотографией больше 10 лет. <br /> Мне нравится чистый
              и лаконичный стиль. <br /> Также я начала практиковаться в ретуши{" "}
              <br /> и в конечном итоге стала заниматься ей <br /> на
              профессиональной основе.
            </p>
            <br />
            <p>Контакты:</p>
            <p className="about__subtext">telegram:</p>
            <a className="about__link" href="https://t.me/nadia_yatsura">
              nadia_yatsura
            </a>{" "}
            <br />
            <p className="about__subtext">email:</p>
            <a className="about__link" href="mailto:yatsuranadezda@gmail.com">
              yatsuranadezda@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
