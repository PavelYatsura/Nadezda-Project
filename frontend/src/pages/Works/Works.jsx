import "./Works.css";
import { IMAGES } from "../../main-iamge.js";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <div className="container container-work">
        {IMAGES.map((p) => (
          <Link  key={p.id} to={`/photoshoots/${p.id}`}>
            <img className="img-work" src={p.src} alt={p.src} />
          </Link>
        ))}
      </div>
    </>
  );
}
