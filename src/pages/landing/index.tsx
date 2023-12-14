import Header from "./sections/header";
import Presentation from "./sections/presentation";
import styles from "./styles.module.scss";

function Landing() {
  return (
    <div className={styles.container}>
      <Header />

      <Presentation />
    </div>
  );
}

export default Landing;
