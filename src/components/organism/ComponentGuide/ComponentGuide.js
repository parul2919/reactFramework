import React from "react";
import styled from "styled-components";
import styles from "./ComponentGuide.style";

const ComponentGuide = (props) => {
  const { className } = props;
  return (
    <section className={`techStack ${className}`}>
      <div className="techStack-list">
        <h2>
          Do find the tech-stack list which we are using to build this
          architecure
        </h2>

        <h3>1. Component Structure Definition</h3>
        <ul>
          <li>Atom</li>
          <li>Molecule</li>
          <li>Organism</li>
          <li>Template</li>
          <li>Page</li>
        </ul>
        <h3>2. Defined Atom Components</h3>
        <h3>3. Defined Molecule Components</h3>
        <h3>4. Defined Organism Components</h3>
        <h3>5. Helper Modules and Libraries Implementation </h3>
      </div>
    </section>
  );
};

export default styled(ComponentGuide)`
  ${styles}
`;
