import React from "react";
import styled from "styled-components";
import styles from "./FolderStructure.style";
import comp from "../../../static/img/comp.png";
import root from "../../../static/img/root.png";
import src from "../../../static/img/src.png";
import staticI from "../../../static/img/static.png";
import commonCssUtill from "../../../static/img/staticCssUtill.png";
import commonJsUtill from "../../../static/img/staticJsUtill.png";
import commonTheme from "../../../static/img/statictheme.png";
import store from "../../../static/img/store.png";

const FolderStructure = (props) => {
  const { className } = props;
  return (
    <section className={`projectStruct wrapper-std ${className}`}>
      <div className="techStack-list">
        <h2>
          In this Page we will walk you through the folder structure used in
          this architecure and it's usage
        </h2>

        <div className="folder-struct">
          <div className="folder-specs">
            <img src={root} alt="root folder" />
            <div className="folder-details">
              <h3> Root Folder Structure </h3>
              <h4>we have all the configuration files at this lever. Eg:</h4>
              <ul>
                <li>
                  <b>.eslint.config</b> - eslint and pritter rule set
                </li>
                <li>
                  <b>jest.config</b> - jest and testing tool dependency
                </li>
                <li>
                  <b>husky config</b> - precommit and prepush config file
                </li>
                <li>
                  <b>git file</b> - git initialization file along with gitignore
                  file
                </li>
                <li>
                  <b>package.json</b> - module dependency file
                </li>
                <li>
                  <b>env files</b> - files with different environment extension
                </li>
              </ul>
            </div>
          </div>

          <div className="folder-specs">
            <img src={src} alt="src folder" />
            <div className="folder-details">
              <h3> Source Folder Structure </h3>
              <h4>
                In src folder, we will have all module development. Such as:{" "}
              </h4>
              <ul>
                <li>
                  <b>Components</b> - will have application feature code
                </li>
                <li>
                  <b>Common</b> - It will contain common code which will get
                  used throughout application whereever needed
                </li>
                <li>
                  <b>Static</b> - It will have static assets such as font files
                  and images
                </li>
                <li>
                  <b>Router</b> - It will have all the routes and its linking
                </li>
                <li>
                  <b>App</b> - Component serving application
                </li>
                <li>
                  <b>Store</b> - It will have all store related dependencies
                </li>
              </ul>
            </div>
          </div>

          <div className="folder-specs">
            <img src={store} alt="src >> store" />
            <div className="folder-details">
              <h3> Store Folder Structure </h3>
              <h4>we have all store related dependencies. Eg:</h4>
              <ul>
                <li>
                  <b>Reducer</b> - Will have reducer files consuming data and
                  serving in application
                </li>
                <li>
                  <b>Action</b> - Will have dispatch function and type's defined
                </li>
                <li>
                  <b>Saga</b> - It will have all the saga files of various api's
                </li>
                <li>
                  <b>Connect</b> - Tells the configuration needed to connect
                  appication with redux store
                </li>
              </ul>
            </div>
          </div>
          <div className="folder-specs">
            <img src={comp} alt="src >> component folder" />
            <div className="folder-details">
              <h3> Component Folder Structure </h3>
              <ul>
                <li>
                  This folder is follwing atomic menthodology to define all the
                  component team works on
                </li>
                <li>Such as : Atom / Molecure / Organism / Template / Pages</li>
              </ul>
            </div>
          </div>

          <div className="folder-specs">
            <img src={staticI} alt="src >> static folder" />
            <div className="folder-details">
              <h3> Static Folder Structure</h3>
              <h4>Contains all static assets</h4>
              <ul>
                <li>
                  <b>img</b> - will have images being used in application
                </li>
                <li>
                  <b>fonts</b> - will have font files of family being used in
                  application
                </li>
              </ul>
            </div>
          </div>

          <div className="common-folder">
            <h3> Common Folder Structure </h3>
            <div className="d-flex">
              <img src={commonCssUtill} alt="src >> common >> style >> css " />
              <img src={commonJsUtill} alt="src >> common >> Js" />
              <img
                src={commonTheme}
                alt="src >> common >> style >> theme folder"
              />
            </div>
            <div className="folder-details">
              <h4>
                Contains utility files to make development easy and to avoid
                redundency
              </h4>
              <ul>
                <li>
                  <b>style :: css</b> - will have static styling classes defined
                  to make styling bit quick
                </li>
                <li>
                  <b>style :: theme</b> - will have defined theme file
                  properties such as buttons, font etc
                </li>
                <li>
                  <b>js</b> - will have few utility functions defind to be used
                  throughout application
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default styled(FolderStructure)`
  ${styles}
`;
