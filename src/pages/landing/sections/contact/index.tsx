import { ComponentProps } from "react";
import Icons from "../../../../components/Icons";
import SectionTitle from "../../../../components/SectionTitle";
import styles from "./styles.module.scss";

const CONTACT_MEDIAS: {
  name: string;
  icon: ComponentProps<typeof Icons>["name"];
}[] = [
  {
    name: "Linked-In",
    icon: "linkedin",
  },
  {
    name: "Github",
    icon: "github",
  },
];

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SectionTitle title="Contato" />

        <ul>
          {CONTACT_MEDIAS.map(({ icon, name }, index) => {
            return (
              <li key={index}>
                <Icons name={icon} />
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
