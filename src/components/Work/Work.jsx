import "./Work.sass";
import { IMAGES } from "../../main-iamge";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <div className="container">
        {IMAGES.map((p) => (
          <Link  key={p.id} to={`/photoshoots/${p.id}`}>
            <img className="img" src={p.src} alt={p.src} />
          </Link>
        ))}
      </div>
    </>
  );
}
