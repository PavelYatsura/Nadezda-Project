import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Error.css";

export default function Error() {
  return (
    <>
      <Header></Header>
      <div className="container error">
        <h3 className="error__text">Такой страницы не существует</h3>
      </div>
      <Footer></Footer>
    </>
  );
}
