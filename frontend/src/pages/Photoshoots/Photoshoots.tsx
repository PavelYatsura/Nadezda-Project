import { useParams } from "react-router-dom";
import { IMAGES } from "../../main-iamge.js";
import ImagesSlider from "../../components/ImagesSlider/ImagesSlider";
import "./Photo.css";
import React from "react";


export default function Photoshoots() {
  const { id } = useParams();
  const foto = IMAGES.find((item) => item.id === Number(`${id}`));
  
  const setFoto = foto?.images;
  
  return (
    <div>
      <ImagesSlider data={setFoto}></ImagesSlider>
    </div>
  );
}
