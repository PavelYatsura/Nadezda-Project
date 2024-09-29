import { useState } from "react";
import { personalImage } from "../../parsonal-image";
import "./Personal.sass";
// import { LightBox } from "../../components/LightBox/LightBox";

export default function Personal() {
  const [clickedImg, setClikedimg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handelClick = (item, ind) => {
    setCurrentIndex(ind);
    setClikedimg(item.src);
  };
  const handelRotationRight = () => {
    // const totalLenght = personalImage.lenght;
    // if (currentIndex + 1 >= totalLenght) {
    //   setCurrentIndex(0);
    //   const newUrls = personalImage[0].src;
    //   setClikedimg(newUrls);
    //   return;
    // }
    // const newIndex = currentIndex + 1;
    // const newUrls = personalImage.filter((item) => {
    //   return personalImage.indexOf(item) === newIndex;
    // });
    // const newItem = newUrls[0].src;
    // setClikedimg(newItem);
    // setCurrentIndex(newIndex);
    setCurrentIndex(
      currentIndex === personalImage.length - 1 ? 0 : currentIndex + 1
    );
  };
  const handelRotationLeft = () => {
    // const totalLenght = personalImage.lenght;
    // if (currentIndex === 0) {
    //   setCurrentIndex(totalLenght-1);
    //   const newUrls = personalImage[totalLenght-1].src;
    //   setClikedimg(newUrls);
    // }
    // const newIndex = currentIndex - 1;
    // const newUrls = personalImage.filter((item) => {
    //   return personalImage.indexOf(item) === newIndex;
    // });
    // const newItem = newUrls[0].src;
    // setClikedimg(newItem);
    // setCurrentIndex(newIndex);
    setCurrentIndex(
      currentIndex === 0 ? personalImage.length - 1 : currentIndex - 1
    );
  };
  const handelClicks = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClikedimg(null);
    }
  };

  console.log(currentIndex);


  return (
    <div className="container wrapper">
      {personalImage.map((item, ind) => {
        return (
          <div key={ind} className="wrapper__images">
            <img
              className="peronal-img "
              src={item.src}
              alt={item.alt}
              onClick={() => handelClick(item, ind)}
            />
          </div>
        );
      })}
      {clickedImg && (
        // <LightBox
        //   clickedImg={clickedImg}
        //   handelRotationRight={handelRotationRight}
        //   handelRotationLeft={handelRotationLeft}
        //   setClikedimg={setClikedimg}
        // ></LightBox>
        <div className="overlay dismiss" onClick={handelClicks}>
          <div onClick={handelRotationLeft} className="overlay-arrows__left">
            <button>back</button>
          </div>
          <img src={clickedImg}></img>
          <span className="dismiss" onClick={handelClicks}>
            X
          </span>
          <div onClick={handelRotationRight} className="overlay-arrows__right">
            <button>next</button>
          </div>
        </div>
      )}
    </div>
  );
}
