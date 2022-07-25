import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import styles from "./List.style";
import NavLink from "../../atom/navLink";

const ListItem = ({ listItem }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { newTab, link, subMenu, page, htmlText, order } = listItem;
  const location = useLocation();
  return (
    <li
      className={`${location.pathname === link ? "active" : "inactive"} ${
        isDropdown ? "dropdown-show" : "dropdown-hide"
      }`}
      onMouseEnter={() => setIsDropdown(true)}
      onMouseLeave={() => setIsDropdown(false)}
    >
      <NavLink
        className="nav-link"
        to={newTab ? { pathname: link } : link}
        target={newTab ? "_blank" : "_self"}
        key={page}
      >
        {htmlText}
      </NavLink>
      {Array.isArray(subMenu) && (
        <List list={subMenu} submenu={subMenu.length > 0} order={order} />
      )}
    </li>
  );
};

const List = (props) => {
  const { list, submenu, className, order } = props;

  return (
    <div
      className={`${className} collapse navbar-collapse ${
        submenu ? "sub-menu" : "menu-items"
      }`}
    >
      <ul
        className={`navbar-nav ml-auto ${
          submenu ? `sub-menu-${order}` : "main-menu"
        } `}
      >
        {list.map((listItem) => (
          <ListItem key={listItem.page} listItem={listItem} />
        ))}
      </ul>
    </div>
  );
};
export default styled(List)`
  ${styles}
`;
