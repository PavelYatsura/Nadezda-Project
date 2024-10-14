import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__title">
          <h1 className="nav__title">НАДЕЖДА ЯЦУРА</h1>
        </Link>
        <div>
          <NavLink to="/" className="nav__link">
            Работы
          </NavLink>
          <NavLink to="/personal" className="nav__link">
            Личное
          </NavLink>
          <NavLink to="/retouche" className="nav__link">
            Ретушь
          </NavLink>
          <NavLink to="/about" className="nav__link">
            О себе
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
