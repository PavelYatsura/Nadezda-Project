import PropTypes from "prop-types";
import {Link} from "react-router-dom"


export default function Image({ src, alt , id}) {
  Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    id: PropTypes.number,
  };

  return (
    <Link to={`/photoshoots/${id}`}>
      
      <img className="img" src={src} alt={alt} />
    </Link>
  );
}
