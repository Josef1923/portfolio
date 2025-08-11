import { useState } from "react";
import cat from "../../assets/cat.svg";
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="hdr">
      <div className="hdr__inner">
        <a className="hdr__logo" href="/" title="Retour à l'accueil">
          <img src={cat} alt="Logo Josef Scherer" className="hdr__img" />
          JOSEF DEV JUNIOR
        </a>

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
          <a href="#about">À propos</a>
          <a href="#work">Projets</a>
          <a href="#contact" className="cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
