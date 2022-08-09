import { css } from "styled-components";

export default css`
  &.gallery-container {
    padding: 0.9375rem 0;
  }

  .gallery-container h1 {
    margin: 2rem 0;
    padding: 0;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 6.5vw;
    font-weight: lighter;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 20em) {
    .gallery-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (min-width: 34em) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 60em) {
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .gallery-grid img {
    width: 100%;
    border: 5px solid #fff;
  }

  .gallery-grid div {
    position: relative;
    cursor: pointer;
  }
  .gallery-grid div:before,
  .gallery-grid div:after {
    transition: 0.3s opacity ease;
    opacity: 0;
  }
  .gallery-grid div:after {
    content: "↔";
    font-size: 80px;
    position: absolute;
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
    color: #fff;
    left: 50%;
    top: 50%;
    display: block;
  }
  .gallery-grid div:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 4px;
    left: 0;
    right: 0;
    background: rgba(34, 34, 34, 0.5);
    display: block;
  }
  .gallery-grid div:hover:before,
  .gallery-grid div:hover:after {
    opacity: 1;
    transition: 0.3s opacity ease;
  }
`;
