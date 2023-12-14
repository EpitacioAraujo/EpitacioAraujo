import classNames from "classnames";
import styles from "./styles.module.scss";

function Header() {
  console.log(styles);
  const containerClasses = classNames([styles.container], {
    [styles.inactive]: false,
  });

  const menuClasses = classNames(styles["menu-list"]);

  const h1Classes = classNames(styles.h1);

  const menuItemClasses = classNames(styles["menu-item"], {
    [styles.active]: false,
  });

  return (
    <div className={containerClasses}>
      <h1 className={h1Classes}>
        <span className="purple">&lt;</span>
        Epitacio
        <span className="purple">&nbsp;/&gt;</span>
      </h1>

      <div className={menuClasses}>
        <div className={menuItemClasses}>
          Inicio<span> /&gt;</span>
        </div>

        <div className={menuItemClasses}>
          Trabalho<span> /&gt;</span>
        </div>

        <div className={menuItemClasses}>
          Sobre<span> /&gt;</span>
        </div>

        <div className={menuItemClasses}>
          Contato<span> /&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
