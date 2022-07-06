import React from "react";
import styled from "styled-components";
import styles from "./TechStack.style";

const TechStack = (props) => {
  const { className } = props;
  return (
    <section className={`techStack ${className}`}>
      <div className="techStack-list">
        <h2>
          Do find the tech-stack list which we are using to build this
          architecure
        </h2>

        <h3>1. Interface Design Structure</h3>
        <p>
          <a href="https://atomicdesign.bradfrost.com/chapter-2/">
            Atomic Design Methodology
          </a>
          - Atoms, molecules, organisms, templates, and pages
        </p>
        <p>
          Atomic design allows us to see our UIs broken down to their atomic
          elements, and also allows us to simultaneously step through how those
          elements join together to form our final UIs and gives thoughtful,
          deliberate interface design systems.{" "}
        </p>
        <h3>2. Framwork Dependency</h3>
        <ul>
          <li>
            <a href="https://reactjs.org/">React</a> - Lightweight FE library
            that deals with the view layer.
          </li>
          <li>
            <a href="https://redux.js.org/">Redux</a> - For State Management
          </li>
          <li>
            <a href="https://redux-saga.js.org/">Redux Saga</a> - easier to
            manage, more efficient to execute, easy to test, and better at
            handling failures.
          </li>
          <li>
            <a href="https://reactrouter.com/">React Router</a> - React Router
            is an API for React applications which provides dynamic, client-side
            routing, allows us to build a single-page web application with
            navigation without the page refreshing as the user navigates.
          </li>
          <li>
            <a href="https://styled-components.com/docs">Styled components</a> -
            provides unique class names for your styles, thus eliminating the
            problems with class names duplications, misspellings, and overlaps.
          </li>
          <li>
            <a href="https://styled-components.com/docs/advanced">
              ThemeProvider
            </a>
            - a wrapper component available in styled-components, we can quickly
            set up multiple custom themes in React and switch between them with
            ease.
          </li>
          <li>
            <a href="https://mui.com/material-ui/getting-started/overview/">
              Material Ui
            </a>
            - CSS framework that provides React components
          </li>
          <li>
            <a href="https://react-hook-form.com/">React Hook Form</a>- To build
            form components. Why React Hook Forms is because it isolates the
            component and avoids the other components from re-rending and thus
            helps improving performance also gives better validation support.
          </li>
        </ul>
        <h3>3. Quality Gates</h3>
        <ul>
          <li>
            <a href="https://testing-library.com/docs/react-testing-library/setup/">
              React Testing Liberary with jest
            </a>
            - React Testing Library is a testing utility tool that's built to
            test the actual DOM tree rendered by React on the browser. The goal
            of the library is to help you write tests that resemble how a user
            would use your application.
          </li>
          <li>
            <a href="https://eslint.org/">Eslint </a>:: .eslint.config.js -
            ESLint is a tool for identifying and reporting on patterns found in
            ECMAScript/JavaScript code, with the goal of making code more
            consistent and avoiding bugs.
          </li>
          <li>
            <a href="https://prettier.io/docs/en/">Prettier</a>- Styling code
            conforms to a consistent style.
          </li>
          <li>
            <a href="https://typicode.github.io/husky/#/">Husky </a>- Husky has
            the ability to validate commit messages with the use commit-msg
            similar to pre-commit rules.
          </li>
          <li>
            <a href="https://commitlint.js.org/#/">Commitlint </a>- Linter tool
            for commit messages
          </li>
        </ul>
        <h3>4. Helper Modules and Libraries</h3>
        <ul>
          <li>
            <a href="https://www.npmjs.com/package/env-cmd">env-cmd</a>- A node
            program for executing commands using an environment from an env
            file.
          </li>
          <li>
            <a href="https://momentjs.com/docs/">Moment.js</a>- Moment JS allows
            displaying of date as per localization and in human readable format.
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-csv">react-csv</a>-
            Build CSV files on the fly basing on Array/literal object of data .{" "}
          </li>
        </ul>
        <h3>5. Deployment :: For demonstraction assuming GCP for deployment</h3>
        <h3>6. Deployment CI Followlines</h3>
        <ul>
          <li>Node Installation</li>
          <li>
            Dependency Installation:: <code>npm install</code>
          </li>
          <li>
            Linting Check :: <code>npm run lint:fix</code>
          </li>
          <li>
            Coverage Check:: <code>npm run test:production</code>
          </li>
          <li>
            Compiled Build Creation ::
            <code>npm run build:production</code>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default styled(TechStack)`
  ${styles}
`;
