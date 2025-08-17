import projects from "../../data/projects.js";
import Exemple from "../exemple/exemple.jsx";
import "./work.css";

function Work() {
  return (
    <section id="work" className="work">
      <div className="work__container">
        <div className="work__head">
          <div>
            <h2 className="work__title">PROJETS</h2>
          </div>
        </div>

        <div className="work__grid">
          {projects.map((proj, index) => (
            <Exemple
              key={index}
              title={proj.title}
              image={proj.image}
              description={proj.description}
              github={proj.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
