import { useState, useEffect, useRef } from "react";
import "./ComparisonImage.css";
import PropTypes from "prop-types";

export default function ComparisonImage({ data }) {
  ComparisonImage.propTypes = {
    data: PropTypes.string,
  };
  const overlayRef = useRef(null);
  const sliderRef = useRef(null);
  const imageRef = useRef(null);
  const [canStart, setCanStart] = useState(false);
  const slideStart = () => {
    setCanStart(true);
  };
  const slideStop = () => {
    setCanStart(false);
  };
  const slideMove = (e) => {
    if (!canStart) return;
    if (!overlayRef.current || !sliderRef.current) return;
    let pos = getCursorPos(e);
    let w = imageRef.current.getBoundingClientRect()?.width;
    if (pos < 0) pos = 0;
    if (pos > w) pos = w;
    slide(pos);
  };
  const getCursorPos = (e) => {
    e = e || window.event;
    let a = imageRef.current.getBoundingClientRect();
    let x = e.pageX - a.left;
    x = x - window.scrollX;
    return x;
  };
  const slide = (x) => {
    overlayRef.current.style.width = x + "px";
    sliderRef.current.style.left = x + "px";
  };
  useEffect(() => {
    window.addEventListener("mouseup", slideStop);
    window.addEventListener("touchend", slideStop);
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);
    return () => {
      window.removeEventListener("mouseup", slideStop);
      window.removeEventListener("touchend", slideStop);
      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
    };
  }, [canStart]);

  return (
    <div>
    <div className="ComparisonImage">
      <div>
        {data.map((item, index) => {
          return (
            <img
              className="ComparisonImage__img"
              key={index}
              src={item.srcAfter}
              ref={imageRef}
            />
          );
        })}
      </div>
      <div className="ComparisonImage__overlay" ref={overlayRef}>
        {data.map((item, index) => {
          return (
            <img
              className="ComparisonImage__img"
              key={index}
              src={item.srcBefore}
            />
          );
        })}
      </div>
      <span
        className="ComparisonImage__slider"
        onMouseDown={slideStart}
        onTouchStart={slideStart}
        ref={sliderRef}
      ></span>
    </div></div>
  );
}
