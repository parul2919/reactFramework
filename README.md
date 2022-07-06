# reactFramework

Tech Stack & Usage


1. Interface Design Structure
Atomic Design Methodology- Atoms, molecules, organisms, templates, and pages

Atomic design allows us to see our UIs broken down to their atomic elements, and also allows us to simultaneously step through how those elements join together to form our final UIs and gives thoughtful, deliberate interface design systems.

2. Framwork Dependency
React - Lightweight FE library that deals with the view layer.
Redux - For State Management
Redux Saga - easier to manage, more efficient to execute, easy to test, and better at handling failures.
React Router - React Router is an API for React applications which provides dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates.
Styled components - provides unique class names for your styles, thus eliminating the problems with class names duplications, misspellings, and overlaps.
ThemeProvider- a wrapper component available in styled-components, we can quickly set up multiple custom themes in React and switch between them with ease.
Material Ui- CSS framework that provides React components
React Hook Form- To build form components. Why React Hook Forms is because it isolates the component and avoids the other components from re-rending and thus helps improving performance also gives better validation support.
3. Quality Gates
React Testing Liberary with jest- React Testing Library is a testing utility tool that's built to test the actual DOM tree rendered by React on the browser. The goal of the library is to help you write tests that resemble how a user would use your application.
Eslint :: .eslint.config.js - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
Prettier- Styling code conforms to a consistent style.
Husky - Husky has the ability to validate commit messages with the use commit-msg similar to pre-commit rules.
Commitlint - Linter tool for commit messages
4. Helper Modules and Libraries
env-cmd- A node program for executing commands using an environment from an env file.
Moment.js- Moment JS allows displaying of date as per localization and in human readable format.
react-csv- Build CSV files on the fly basing on Array/literal object of data .
5. Deployment :: For demonstraction assuming GCP for deployment
6. Deployment CI Followlines
Node Installation
Dependency Installation:: npm install
Linting Check :: npm run lint:fix
Coverage Check:: npm run test:production
Compiled Build Creation ::npm run build:production
