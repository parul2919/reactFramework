import React from "react";
import styled from "styled-components";
import styles from "./Utilities.style";

const ComponentGuide = (props) => {
  const { className } = props;
  return (
    <section className={`techStack ${className} wrapper-std`}>
      <div className="techStack-list">
        <h2>
          All the Utilities listing can be found here inside Common folder ie,
          src :: common
        </h2>

        <h3>1. JS Utilieis</h3>
        <ul>
          <li>
            <b>convertCashing</b> - This function allows to chnage casing of
            given "string without spaces" to the desired one
          </li>
          <li>
            <b>dataFetcher</b> - Allows to make api calls using browser fetch
            api
          </li>
          <li>
            <b>debounceFunc</b> - This function allows to limit or hinder the
            execution of a function based on a given condition.
          </li>
          <li>
            <b>ellipsis</b> - This function allows to tructate string with
            defined character limit and adds ellipsis at end
          </li>
          <li>
            <b>fileUpload</b> - Implements file upload by sending formData using
            browser fetch api
          </li>
          <li>
            <b>ga-init</b>- initializer of ga4 intance
          </li>
          <li>
            <b>generateRandom</b>- Allows to geterate random numbers based on
            defined upper & lower limit
          </li>
          <li>
            <b>getNameInitial</b>- This function allows to get name initials
          </li>
          <li>
            <b>hashing</b> - Allows to get hashed value of giving string eg,
            email
          </li>
          <li>
            <b>lcStorageUtil</b>- Allows to do local storage operations
          </li>
          <li>
            <b>removeArrDuplicate</b>- Allows to remove all the duplicate values
            from an array
          </li>
          <li>
            <b>repeatTimes</b>- Allows to do required operation x times
          </li>
          <li>
            <b>slugify</b>- Allows to slugify give string with hyphenated input
          </li>
          <li>
            <b>sorting</b>- This function allows array sorting
          </li>
          <li>
            <b>validations</b> - This function is having validation rules for
            form input
          </li>
          <li>
            <b>withStyle</b> - HOC : The component send styles in form of an
            object
          </li>
        </ul>
        <h3>2. Style Themes</h3>
        <ul>
          <li>
            <b>Theme</b> - Theme variables export can be find here like Font,
            color, media etc
          </li>
          <li>
            <b>fonts</b> - Defines font configuration variables{" "}
          </li>
          <li>
            <b>colors</b> - Defines theme color configuration variables{" "}
          </li>
          <li>
            <b>gridConfig</b> - Defines gridConfig configuration variables such
            as offset, gutterspaces etc
          </li>
          <li>
            <b>dimensions</b> - Defines mediaqueris configuration variables{" "}
          </li>
          <li>
            <b>checkbox</b> - Enables custom style checkbox implementation{" "}
          </li>
          <li>
            <b>buttons</b> - Predefined reusable button classes such as
            button--primary, button--disable etc
          </li>
          <li>
            <b>confirmPopOverStyle</b> - Specifies predefined common popover
            stylings
          </li>
        </ul>
        <h3>3. Style Css</h3>
        <ul>
          <li>
            <b>index.css</b> - Aggregator file of defined css files
          </li>
          <li>
            <b>normaliza.css</b> - Style file to reset default browser
            properties of HTML tags
          </li>
          <li>
            <b>utilClasses</b> - Style file contains common handy classes to put
            styling based on bootsrap class definitions
          </li>
          <li>
            <b>fonts.css</b>imports font family required for project other than
            browser fonts
          </li>
        </ul>
      </div>
    </section>
  );
};

export default styled(ComponentGuide)`
  ${styles}
`;
