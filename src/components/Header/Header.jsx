import { Link, NavLink } from "react-router-dom";
import "./Header.sass";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__title">
          <h1 className="nav__title">NADEZHDA YATSURA</h1>
        </Link>
        <div>
          <NavLink to="/" className="nav__link">
            Works
          </NavLink>
          <NavLink to="/personal" className="nav__link">
            Personal
          </NavLink>
          <NavLink to="/retouche" className="nav__link">
            Retouche
          </NavLink>
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
