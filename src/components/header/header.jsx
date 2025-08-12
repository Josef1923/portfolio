import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cat from "../../assets/cat.svg";
import github from "../../assets/github.svg";
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="hdr">
      <div className="hdr__inner">
        <Link
          className="hdr__title"
          to="/"
          title="Retour à l'accueil"
          onClick={closeMenu}
        >
          <img src={cat} alt="Logo Josef Scherer" className="hdr__cat" />
          JOSEF - DEV JUNIOR
        </Link>

        <button
          className="hdr__burger"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`hdr__nav ${open ? "is-open" : ""}`}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            À propos
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Projets
          </NavLink>

          <a
            href="https://github.com/Josef1923"
            target="_blank"
            rel="noreferrer"
            className="hdr__github"
            title="Voir mon GitHub"
            onClick={closeMenu}
          >
            <img src={github} alt="GitHub" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
