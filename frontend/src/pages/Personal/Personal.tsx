import React from "react";
import LightBox from "../../components/LightBox/LightBox";
import { personalImage } from "../../images.js";
import "./Personal.css"
export default function Personal1() {
  return (
    <div className="personal">
      <LightBox data={personalImage}></LightBox>
    </div>
  );
}
