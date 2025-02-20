import React from "react";
import styles from '../styles/ToolsWrapper.module.css';

const tools = [
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    iconClass: "devicon-javascript-plain",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    iconClass: "devicon-typescript-plain",
  },
  {
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    iconClass: "devicon-html5-plain",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    iconClass: "devicon-react-original",
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/",
    iconClass: "devicon-nodejs-plain",
  },
  {
    name: "Ruby",
    url: "https://www.ruby-lang.org/en/",
    iconClass: "devicon-ruby-plain",
  },
  {
    name: "NextJS",
    url: "https://nextjs.org/",
    iconClass: "devicon-nextjs-original-wordmark",
  },
  {
    name: "Sass",
    url: "https://sass-lang.com/",
    iconClass: "devicon-sass-original",
  },
  {
    name: "Express",
    url: "https://expressjs.com/",
    iconClass: "devicon-express-original",
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    iconClass: "devicon-postgresql-plain",
  },
  {
    name: "Jest",
    url: "https://jestjs.io/",
    iconClass: "devicon-jest-plain",
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    iconClass: "devicon-git-plain",
  }
];

export default function Tools() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.item}>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              <i className={tool.iconClass}></i>
            </a>
          </div>
        ))}
        {tools.map((tool, index) => (
          <div key={index + tools.length} className={styles.item}>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              <i className={tool.iconClass}></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}