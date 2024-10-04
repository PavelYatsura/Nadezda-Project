import React from "react";
import ComparisonImage from "../../components/ComparisonImage/ComparisonImage";
import { retouchImage } from "../../retouche-image.js";
import "./Retouch.css"

export default function Retouch() {
  return (
    <div className="container retouch ">
      <ComparisonImage data={retouchImage} />
    </div>
  );
}


