import "./Works.css";
import { workImage } from "../../images.js";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../components/Footer/Footer.js";

export default function Work() {
  return (
    <>
      <div className="container work">
        {workImage.map((p) => (
          <Link className="work__a" key={p.id} to={`/photoshoots/${p.id}`}>
            <img className="work__img" src={p.src} alt={p.src} />
            <div className="work__description_layer">
              <p className="work__description">{p.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}
