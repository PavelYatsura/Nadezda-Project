import React from "react";
import ComparisonImage from "../../components/ComparisonImage/ComparisonImage";
import { retouchImage } from "../../images.js";
import "./Retouch.css"

export default function Retouch() {
  return (
    <div className="retouch ">
      <ComparisonImage data={retouchImage} />
    </div>
  );
}


