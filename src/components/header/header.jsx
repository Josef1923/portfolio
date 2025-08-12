import { useState } from "react";
import cat from "../../assets/cat.svg";
import github from "../../assets/github.svg";
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  return (
    <header className="hdr">
      <div className="hdr__inner">
        <a className="hdr__title" href="/" title="Retour à l'accueil">
          <img src={cat} alt="Logo Josef Scherer" className="hdr__cat" />
          JOSEF - DEV JUNIOR
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
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            À propos
          </a>
          <a
            href="#work"
            className={active === "work" ? "active" : ""}
            onClick={() => setActive("work")}
          >
            Projets
          </a>
          <a
            href="https://github.com/Josef1923"
            target="_blank"
            rel="noreferrer"
            className="hdr__github"
            title="Voir mon GitHub"
          >
            <img src={github} alt="GitHub" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
