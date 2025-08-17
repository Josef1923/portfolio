import portfolioImg from "../assets/portfolio.jpg";
import kazaImg from "../assets/kaza.jpg";
import sportseeImg from "../assets/sportsee.jpg";

const projects = [
  {
    title: "Portfolio",
    image: portfolioImg,
    description:
      "Ce site est à la fois mon CV en ligne et un projet personnel. Il m'a permis de mettre en pratique mes compétences en React, en intégration responsive et en déploiement GitHub Pages, tout en continuant à progresser après ma formation.",
    github: "https://github.com/Josef1923/portfolio",
  },
  {
    title: "Kaza",
    image: kazaImg,
    description:
      "Application de location immobilière développée en React, avec navigation dynamique, carrousel et pages responsives à partir de maquettes Figma.",
    github: "https://github.com/Josef1923/Kaza-P11",
  },
  {
    title: "SportSee",
    image: sportseeImg,
    description:
      "Dashboard d'analyse de performances sportives développé en React avec des graphiques dynamiques , utilisant des données mockées.",
    github: "https://github.com/Josef1923/P12-SportSee",
  },
];

export default projects;
