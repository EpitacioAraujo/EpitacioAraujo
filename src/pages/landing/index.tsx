import About from "./sections/about";
import Contact from "./sections/contact";
import Header from "./sections/header";
import Presentation from "./sections/presentation";
import styles from "./styles.module.scss";

function Landing() {
  return (
    <div className={styles.container}>
      <Header />

      <Presentation />

      <About />

      <Contact />
    </div>
  );
}

export default Landing;
