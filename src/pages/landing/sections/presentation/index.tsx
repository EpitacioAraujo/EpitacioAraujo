import classNames from "classnames";
import "./styles.scss";

function Presentation() {
  const containerClasses = classNames("container");

  const sectionClasses = classNames("section-title");

  const presentationClasses = classNames("presentation");

  return (
    <div className={containerClasses}>
      <div className="content">
        <span className={sectionClasses}>Start /&gt;</span>

        <p className={presentationClasses}>
          Olá, meu nome é <span>Epitacio Araujo</span>
          <br />
          eu <span className="mono letter-spacing">desenvolvo</span> para{"---"}
        </p>

        <div>
          deixe-me mostrar para você <span>...</span>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
