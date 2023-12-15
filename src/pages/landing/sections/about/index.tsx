import { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.scss";

const tabs = (total: number) => {
  return (
    `<span class="${styles["tab-dots"]}">` +
    Array(total).fill("..").join("") +
    `</span>`
  );
};

const setQuotes = (text: string) => {
  return `' ${text} '`;
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

const generateConstructorString = () => {
  const atributes = [
    ["name", setQuotes("Epitacio Araujo")],
    ["dayOfBirthTimestamp", 964137600000],
    ["email", setQuotes("epitacio.sobrinho00@gmail.com")],
    ["whatsNumber", 88997761060],
  ]
    .map(([attribute, value]: any[]) => {
      const valueString = (typeof value === "string" ? green : orange)(value);
      return `${tabs(2)}${red("this")}.${lightGreen(
        attribute
      )} = ${valueString}`;
    })
    .join("<br />");

  return [`${tabs(1)}${purple("constructor")}() {`, atributes, `${tabs(1)}}`];
};

const generateWorkMethodString = () => {
  const itensList = [
    [
      "Set/21 – Nov/23",
      "READI – Registro e adequação de documentação imobiliária",
    ],
    ["Mar/21 – Ago/21", "Elevar Vendas"],
  ].map(([time, value]: any[]) => {
    return (
      `${tabs(3)}{ ${green(setQuotes(time))}` +
      `${setNBSP(2)}:${setNBSP(2)}` +
      `${green(setQuotes(value))} }`
    );
  });

  return [
    `${tabs(1)}${yellow("workExperience")}() {`,
    `${tabs(2)}${purple("return")} [`,
    ...itensList,
    `${tabs(2)}]`,
    `${tabs(1)}}`,
  ];
};

const generateEducationalMethodString = () => {
  const atributes = [
    [`2021-now`, `Unicesumar - Engenharia de Software`],
    [`2015-2018`, `EEEP Monsenho Odorico de Andrade - Técnico em Informática`],
  ].map(([attribute, value]) => {
    return (
      `${tabs(3)}{ ${green(setQuotes(attribute))}` +
      `${setNBSP(2)}:${setNBSP(2)}` +
      `${green(setQuotes(value))} },`
    );
  });

  return [
    `${tabs(1)}${yellow("education")}() {`,
    `${tabs(2)}${purple("return")} [`,
    ...atributes,
    `${tabs(2)}]`,
    `${tabs(1)}}`,
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
    `${tabs(1)}${yellow("skills")}() {`,
    `${tabs(2)}${purple("return")} [ ${skills} ]`,
    `${tabs(1)}}`,
    `}`,
  ];
};

const rows = [
  `${purple("class")} ${yellow("Epitacio Araujo")} {`,
  `${tabs(1)}${grey("// Eu posso, porque eu fiz.")}`,
  `${tabs(1)}${grey("// Minha variedade de skills continuam expandindo.")}`,
  ``,
  ...generateConstructorString(),
  ``,
  ...generateWorkMethodString(),
  ``,
  ...generateEducationalMethodString(),
  ``,
  ...generateSkillMethodString(),
].join("<br />");

function About() {
  const divRef = useRef({} as HTMLDivElement);

  useLayoutEffect(() => {
    divRef.current.innerHTML = rows;
  }, []);

  return (
    <div className={styles.container}>
      <div ref={divRef}></div>
    </div>
  );
}

export default About;
