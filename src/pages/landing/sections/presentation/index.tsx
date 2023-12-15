import classNames from "classnames";
import "./styles.scss";
import SectionTitle from "../../../../components/SectionTitle";

function Presentation() {
  const containerClasses = classNames("container");

  const presentationClasses = classNames("presentation");

  return (
    <div className={containerClasses}>
      <div className="content">
        <SectionTitle title="Start" />

        <p className={presentationClasses}>
          Olá, meu nome é <span>Epitacio Araujo</span>
          <br />e <span className="mono letter-spacing">desenvolvo</span> para
          {"---"}
        </p>

        <div>
          deixe-me mostrar para você <span>...</span>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
