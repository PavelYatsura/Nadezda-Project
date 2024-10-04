import React from "react";
import LightBox from "../../components/LightBox/LightBox";
import { personalImage } from "../../parsonal-image.js";
export default function Personal1() {
  return (
    <>
      <LightBox data={personalImage}></LightBox>
    </>
  );
}
