import "./exemple.css";

function Exemple({ title, image, description, github }) {
  return (
    <article className="exemple">
      <div className="exemple__media">
        <img src={image} alt={title} className="exemple__image" />
      </div>

      <div className="exemple__body">
        <h3 className="exemple__title">{title}</h3>
        <p className="exemple__description">{description}</p>

        <div className="exemple__links">
          {github && (
            <a
              className="btn btn--ghost"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
export default Exemple;
