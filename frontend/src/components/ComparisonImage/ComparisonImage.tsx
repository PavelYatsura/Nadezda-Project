import { useState, useEffect, useRef } from "react";
import "./ComparisonImage.css";

import React from "react";

export default function ComparisonImage({ data }) {
  
  const [number, setNumber] = useState(0);
  const imgIndex = (index) => {
    setNumber(index);
  };
  const overlayRef = useRef<HTMLImageElement>(null);
  const sliderRef = useRef<HTMLImageElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
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
    let w = imageRef?.current?.getBoundingClientRect()?.width;
    if (pos < 0) pos = 0;
    if (pos > Number(w)) pos = Number(w);
    slide(pos);
  };
  const getCursorPos = (e) => {
    e = e || window.event;
    let a = imageRef.current?.getBoundingClientRect();
    let x = e.pageX - a!.left;
    x = x - window.scrollX;
    return x;
  };
  const slide = (x) => {
    overlayRef.current!.style.width = x + "px";
    sliderRef.current!.style.left = x + "px";
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
      <div className="wrapper">
        {data.map((item, index) => {
          return (
            <img
              className="img"
              key={index}
              src={item.srcBefore}
              onClick={() => imgIndex(index)}
            />
          );
        })}
      </div>
      <div className="ComparisonImage-wrapper">
        <div className="ComparisonImage">
          <div>
            <img
              className="ComparisonImage__img"
              src={data[number].srcAfter}
              ref={imageRef}
            />
          </div>
          <div className="ComparisonImage__overlay" ref={overlayRef}>
            <img
              className="ComparisonImage__img"
              src={data[number].srcBefore}
            />
          </div>
          <span
            className="ComparisonImage__slider"
            onMouseDown={slideStart}
            onTouchStart={slideStart}
            ref={sliderRef}
          ></span>
        </div>
      </div>
    </div>
  );
}
