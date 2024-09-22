import "./Work.sass";
import { IMAGES } from "../../main-iamge";

import Image from "../Image/Image"
/*function Image(props) {
  Image.propTypes = {
    src: PropTypes.any,
    alt: PropTypes.any,
  };
  return <img className="img" src={props.src} alt={props.alt} />;
}*/

export default function Work() {
  return (
    <>
      <div className="container">
        {IMAGES.map((p) => (
          <Image key={p.id} {...p} />
        ))}
      </div>
    </>
  );
}

/* export default function Work() {
  return (
    <>
      <div className="container">
        {IMAGES.map((p) => (
          <img className="imga" key={p.id} src={p.src} alt={p.alt} />
        ))}
      </div>
    </>
  );
}*/
