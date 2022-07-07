import React from "react";
import styled from "styled-components";
import styles from "./ComponentGuide.style";

const ComponentGuide = (props) => {
  const { className } = props;
  return (
    <section className={`techStack wrapper-std ${className}`}>
      <div className="techStack-list">
        <h2 className="mb-30">Component Guide</h2>

        <h3>1. Component Structure Definition</h3>
        <ul>
          <li>
            <b>Atom - </b>These are the smallest building blocks of your
            project. Individual legos. Text styles, buttons, icons, input
            fields, checkboxes, etc.
          </li>
          <li>
            <b>Molecule - </b>Those are more complex entities consisting of
            several atoms. Things like notification toasts, data values (label:
            value), input fields with buttons.
          </li>
          <li>
            <b>Organism - </b>Truly functional parts of a page, made from groups
            of atoms and molecules. Many organisms function on their own,
            without relying on other elements on the page. They are usually huge
            components, like navigation, sidebars, forms, popups with lots of
            data, etc.
          </li>
          <li>
            <b>Template - </b> They combine organisms into a proper website
            layout.
          </li>
          <li>
            <b>Page - </b>The routes we follow which renders the real content
          </li>
        </ul>
        <h3>2. Defined Atom Components</h3>
        <ul>
          <li>
            <b>ButtonAtom - </b>Button component which accepts probs like-
            buttonClass, variant and onButtonClick as function
          </li>
          <li>
            <b>DownloadCSV - </b>If we have requirement like convert json array
            to CSV by accepting defined key's of the array and then download the
            csv file, simply use this component by passing props like headers,
            fileName and data
          </li>
          <li>
            <b>ErrorBoundry - </b>It is a safe component to prevent your app
            from crashing
          </li>
          <li>
            <b>FlashMessage - </b>To prompt a message for few seconds on window.
            Ex: api success or failure msg
          </li>
          <li>
            <b>Loader - </b>Loader component to be used throughout application
          </li>
          <li>
            <b>Select - </b>Selectbox where only one option can be selected
          </li>
          <li>
            <b>Multiselect - </b> Selectbox where multiple options can be
            selected
          </li>
          <li>
            <b>Pagination - </b>Allows to separate digital content into discrete
            pages
          </li>
          <li>
            <b>TabButton - </b>Atom to define tabs button
          </li>
          <li>
            <b>ToggleSwitch - </b>Atom defines a swich button which can be used
            for toggling actions. ex: fav/unfav
          </li>
          <li>
            <b>Tooltip - </b>Info content popover
          </li>
        </ul>
        <h3>3. Defined Molecule Components</h3>
        <ul>
          <li>
            <b>Modal - </b>Overlay Modal component which accepts childern prop
            to make content independent. Also exposed few configurations and
            properties.
          </li>
          <li>
            <b>Accordion - </b>This component is defined to serve large content
            in a small chunks through disclosure actions.
          </li>
          <li>
            <b>Confirm Popover - </b> It provides popover with confirm and
            cancel actions
          </li>
          <li>
            <b>Date Range Selector - </b> Calender component where custom
            definition can be passed as per requirement
          </li>
          <li>
            <b>Tabs - </b> Tabs component to serve perticular toggled data.
          </li>
        </ul>
        <h3>4. Defined Organism Components</h3>
        <ul>
          <li>
            <b>Header - </b>Demonstrate header component with navdata and
            navlink files which contains the navigation configurations
          </li>
          <li>
            <b>AboutForm - </b>Demonstrate how can we use react-hook-forms and
            how ease it gives in validations and data submission
          </li>
          <li>
            <b>Footer - </b>Provides simple footer component definition which is
            a memonize component
          </li>
        </ul>
        <h3>5. Helper Modules and Libraries Implementation </h3>
        <ul>
          <li>
            <b>moment js</b> Implementation ex :-
            <code> moment().format('YYYY-MM-DD'); </code> :: output: 2022-07-07
          </li>
          <li>
            <b>env-cmd</b> Implementation Script ex :- <br />
            <p className="ml-50">
              Creation of build by serving dev env file ::
              <code> npm run build:development</code>
            </p>
            <p className="ml-50">
              Testing coverage by serving staging env file ::
              <code> npm run test:staging</code>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default styled(ComponentGuide)`
  ${styles}
`;
