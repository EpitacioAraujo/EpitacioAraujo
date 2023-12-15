import About from "./sections/about";
import Header from "./sections/header";
import Presentation from "./sections/presentation";
import styles from "./styles.module.scss";

function Landing() {
  return (
    <div className={styles.container}>
      <Header />

      <Presentation />

      <About />
    </div>
  );
}

export default Landing;
