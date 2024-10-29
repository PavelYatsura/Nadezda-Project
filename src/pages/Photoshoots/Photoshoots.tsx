import { useParams } from "react-router-dom";
import { workImage } from "../../images.js";
import ImagesSlider from "../../components/ImagesSlider/ImagesSlider";
import React from "react";

export default function Photoshoots() {
  const { id } = useParams();
  const foto = workImage.find((item) => item.id === Number(`${id}`));

  const setFoto = foto?.images;

  return <ImagesSlider data={setFoto}></ImagesSlider>;
}
