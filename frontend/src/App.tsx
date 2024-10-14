import "./responsive.css"
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
