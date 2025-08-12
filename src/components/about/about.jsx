import "./about.css";
import profil from "../../assets/profil.png";
import cv from "../../assets/CV.pdf";

export default function About() {
  return (
    <section id="about" className="abt">
      <div className="abt__bg" aria-hidden="true" />

      <div className="abt__container">
        <div className="abt__media">
          <div className="abt__avatar">
            <img src={profil} alt="Portrait" />
            <span className="abt__ring" />
          </div>
          <ul className="abt__stats">
            <li>
              <span className="num">10+</span>
              <span className="lbl">projets réalisés</span>
            </li>
            <li>
              <span className="num">6</span>
              <span className="lbl">stacks</span>
            </li>
            <li>
              <span className="num">100%</span>
              <span className="lbl">motiv</span>
            </li>
          </ul>

          <ul className="abt__chips" aria-label="Compétences principales">
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS Modules</li>
            <li>Git/GitHub</li>
          </ul>
        </div>

        <div className="abt__text">
          <p className="abt__kicker">À propos</p>
          <h1 className="abt__title">
            Bienvenue, moi c'est <span className="grad">Josef</span>
          </h1>

          <p className="abt__lead">
            Ancien skiman, comptable et désormais diplômé d'OpenClassrooms, j'ai
            décidé de faire un métier qui me plaît vraiment : le développement
            web. En tant que développeur front-end junior, je n'ai peut-être pas
            encore d'expérience en entreprise, mais je compense par une grande
            capacité d'adaptation, une envie d'apprendre chaque jour et
            l'habitude de me dépasser dans des environnements très différents.
            Mon objectif : rejoindre une équipe bienveillante, contribuer
            rapidement et progresser aux côtés de développeurs expérimentés.
          </p>

          <div className="abt__cta">
            <a href={cv} className="btn btn--brand" download>
              📥 Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
