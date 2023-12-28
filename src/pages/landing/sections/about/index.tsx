import { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.scss";
import SectionTitle from "../../../../components/SectionTitle";

const tabs = (total: number) => {
  return (
    `<span class="${styles["tab-dots"]}">` +
    Array(total).fill("..").join("") +
    `</span>`
  );
};

const setQuotes = (text: string) => {
  return `'${text}'`;
};

const setNBSP = (total: number) => {
  return Array(total).fill("&nbsp;").join("");
};

const purple = (text: string) => {
  return `<span class="${styles.purple}">${text}</span>`;
};

const yellow = (text: string) => {
  return `<span class="${styles.yellow}">${text}</span>`;
};

const red = (text: string) => {
  return `<span class="${styles.red}">${text}</span>`;
};

const green = (text: string) => {
  return `<span class="${styles.green}">${text}</span>`;
};

const lightGreen = (text: string) => {
  return `<span class="${styles.lightGreen}">${text}</span>`;
};

const orange = (text: string) => {
  return `<span class="${styles.orange}">${text}</span>`;
};

const grey = (text: string) => {
  return `<span class="${styles.grey}">${text}</span>`;
};

const row = (rowDt: string) => {
  return `<span class="${styles.row}">${rowDt}</span>`;
};

const generateConstructorString = () => {
  const atributes = [
    ["name", setQuotes("Epitacio Araujo")],
    ["dayOfBirthTimestamp", 964137600000],
    ["email", setQuotes("epitacio.sobrinho00@gmail.com")],
    ["whatsNumber", 88997761060],
  ].map(([attribute, value]: any[]) => {
    const valueString = (typeof value === "string" ? green : orange)(value);
    return row(
      `${tabs(2)}${red("this")}.${lightGreen(attribute)} = ${valueString}`
    );
  });

  return [
    row(`${tabs(1)}${purple("constructor")}() {`),
    ...atributes,
    row(`${tabs(1)}}`),
  ];
};

const generateWorkMethodString = () => {
  const itensList = [
    [
      "Set/21 – Nov/23",
      "READI – Registro e adequação de documentação imobiliária",
    ],
    ["Mar/21 – Ago/21", "Elevar Vendas"],
  ].map(([time, value]: any[]) => {
    return row(
      `${tabs(3)}{ ${green(setQuotes(time))}` +
        `${setNBSP(2)}:${setNBSP(2)}` +
        `${green(setQuotes(value))} }`
    );
  });

  return [
    row(`${tabs(1)}${yellow("workExperience")}() {`),
    row(`${tabs(2)}${purple("return")} [`),
    ...itensList,
    row(`${tabs(2)}]`),
    row(`${tabs(1)}}`),
  ];
};

const generateEducationalMethodString = () => {
  const atributes = [
    [`2021-now`, `Unicesumar - Engenharia de Software`],
    [`2015-2018`, `EEEP Monsenho Odorico de Andrade - Técnico em Informática`],
  ].map(([attribute, value]) => {
    return row(
      `${tabs(3)}{ ${green(setQuotes(attribute))}` +
        `:` +
        `${green(setQuotes(value))} },`
    );
  });

  return [
    row(`${tabs(1)}${yellow("education")}() {`),
    row(`${tabs(2)}${purple("return")} [`),
    ...atributes,
    row(`${tabs(2)}]`),
    row(`${tabs(1)}}`),
  ];
};

const generateSkillMethodString = () => {
  const skills = [
    "HTML/CSS/JS",
    "Node.js",
    "Bootstrap/Material UI",
    "Vite",
    "SCSS",
    "npm/yarn",
    "PWA",
    "SPA",
    "GIT/GITFlow",
    "React.js",
    "React Native",
    "Web Sockets",
    "PostgreSQL/Microsoft SQL Server/MySQL",
    "Firebase/MongoDB",
    "AWS",
    "TypeScript",
    "NestJS",
    "Sequelize",
    "TypeORM",
    "JWT",
    "MVC",
    "SOLID",
  ]
    .map((skill) => green(setQuotes(skill)))
    .join("&nbsp;&nbsp;,&nbsp;&nbsp;");

  return [
    row(`${tabs(1)}${yellow("skills")}() {`),
    row(`${tabs(2)}${purple("return")} [ ${skills} ]`),
    row(`${tabs(1)}}`),
    row(`}`),
  ];
};

const rows = [
  row(`${purple("class")} ${yellow("Epitacio Araujo")} {`),
  row(`${tabs(1)}${grey("// Eu posso, porque eu fiz.")}`),
  row(
    `${tabs(1)}${grey("// Minha variedade de skills continuam expandindo.")}`
  ),
  row(`<div class="${styles.voidRow}"></div>`),
  ...generateConstructorString(),
  row(`<div class="${styles.voidRow}"></div>`),
  ...generateWorkMethodString(),
  row(`<div class="${styles.voidRow}"></div>`),
  ...generateEducationalMethodString(),
  row(`<div class="${styles.voidRow}"></div>`),
  ...generateSkillMethodString(),
].join("");

function About() {
  const divRef = useRef({} as HTMLDivElement);

  useLayoutEffect(() => {
    divRef.current.innerHTML = rows;

    const rowsList = document.querySelectorAll(`.${styles.row}`);

    console.log(rowsList);
    rowsList.forEach((element, index) => {
      const { offsetHeight, style } = element as HTMLSpanElement;

      style.setProperty("--rowHeight", `${offsetHeight}px`);
      style.setProperty("--rowNumber", `${index + 1}`);

      console.log(style);
    });
  }, []);

  return (
    <div className={styles.container}>
      <SectionTitle title="Sobre" />

      <div ref={divRef} className={styles.content}></div>
    </div>
  );
}

export default About;
