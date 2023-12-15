import styles from "./styles.module.scss";
import classNames from "classnames";

function SectionTitle(props: { title: string }) {
  const sectionClasses = classNames(styles["section-title"]);

  return <span className={sectionClasses}>{props.title} /&gt;</span>;
}

export default SectionTitle;
