import { css } from "styled-components";

export default css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .menu-items {
    text-align: left;
    position: absolute;
    margin-top: -6rem;
    margin-left: -1rem;
    list-style: none;
    opacity: 0;
    transform: translateX(-10%);
    transition: transform 100ms ease-in-out, opacity 200ms;
    padding: 15px;
    top: 12.5rem;
    left: 0.5rem;
    background-color: #dbdbdb;
    height: 100vh;
  }

  .menu-items li {
    color: white;
    padding: 0.5rem;
  }

  .menu-items li a {
    color: white;
    text-decoration: none;
  }

  .menu-items li a:hover {
    color: rgb(174, 174, 174);
  }

  .check {
    position: absolute;
    top: 30px;
    left: 30px;
    height: 3rem;
    width: 3rem;
    opacity: 0;
    z-index: 3;
  }

  .check:hover {
    cursor: pointer;
  }

  .check:checked ~ .menu-items {
    display: block;
    transform: translateX(0%);
    opacity: 1;
  }

  .ham-menu {
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 30px;
    left: 30px;
    padding: 0.5rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: black;
    border-radius: 0.25em;
  }

  .ham-menu .line {
    background-color: white;
    border-radius: 1em;
    width: 2rem;
    height: 0.25rem;
  }

  .ham-menu .line1 {
    transform-origin: 0% 0%;
    transition: transform 100ms ease-in-out;
  }

  .ham-menu .line3 {
    transform-origin: 0% 100%;
    transition: transform 100ms ease-in-out;
  }

  .check:checked ~ .ham-menu .line1 {
    display: block;
    transform: rotate(45deg);
  }

  .check:checked ~ .ham-menu .line2 {
    opacity: 0;
  }

  .check:checked ~ .ham-menu .line3 {
    display: block;
    transform: rotate(-45deg);
  }
`;
