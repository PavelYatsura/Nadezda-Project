import "./LightBox.sass";
import PropTypes from "prop-types";

export const LightBox = ({
  clickedImg,
  handelRotationRight,
  handelRotationLeft,
  setClikedimg,
}) => {
  LightBox.propTypes = {
    clickedImg: PropTypes.any,
    handelRotationRight: PropTypes.any,
    handelRotationLeft: PropTypes.any,
    setClikedimg: PropTypes.any,
  };

  const handelClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClikedimg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handelClick}>
        <div onClick={handelRotationLeft} className="overlay-arrows__left">
          <button>back</button>
        </div>
        <img src={clickedImg}></img>
        <span className="dismiss" onClick={handelClick}>
          X
        </span>
        <div onClick={handelRotationRight} className="overlay-arrows__right">
          <button>next</button>
        </div>
      </div>
    </>
  );
};
