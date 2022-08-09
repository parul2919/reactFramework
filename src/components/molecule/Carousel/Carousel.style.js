import { css } from "styled-components";

export default css`
  position: relative;
  .slider-wrap {
    width: 300px;
    height: 500px;
    position: relative;
    left: 10%;
    top: 10%;
  }
  .slider {
    overflow: hidden;
    position: relative;
    font-family: "Segoe UI", "Frutiger Linotype", "Dejavu Sans",
      "Helvetica Neue", Arial, sans-serif;
  }
  .holder {
    display: flex;
    position: relative;
  }
  .shift {
    transform: translateX(0%);
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .resetLeft {
    transform: translateX(-100%);
    transition: none;
  }
  .slide {
    flex: 1;
    min-width: 300px;
    width: 300px;
    height: 500px;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .slide:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 110%;
    background: linear-gradient(black, transparent, transparent, black);
  }
  .navSlider {
    height: 100%;
    position: absolute;
    top: 0px;
    left: -10%;
    display: flex;
    width: 120%;
    align-items: center;
    justify-content: space-between;
  }
  .navSlider line {
    stroke: #ffffffcc;
    stroke-width: 10;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 83;
    stroke-dashoffset: -83;
    transition: stroke-dashoffset 300ms;
  }
  .navSlider svg {
    overflow: visible;
    cursor: pointer;
  }
  #rightArrow {
    -webkit-filter: drop-shadow(9px 5px 6px rgba(16, 17, 21, 0.8));
    filter: drop-shadow(9px 5px 6px rgba(16, 17, 21, 0.8));
  }
  #leftArrow {
    -webkit-filter: drop-shadow(-9px 5px 6px rgba(16, 17, 21, 0.8));
    filter: drop-shadow(-9px 5px 6px rgba(16, 17, 21, 0.8));
  }
  .navSlider:hover line {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 400ms;
  }
  .navSlider svg:hover line {
    stroke: white;
  }
  .text {
    position: absolute;
    color: white;
    top: 15px;
    left: 15px;
    font-size: 30px;
    font-weight: 700;
    opacity: 0;
    transform: translateX(100%);
  }
  .animateSlader .central .text {
    display: block;
    opacity: 1;
    transform: translateX(0%);
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .top {
    bottom: 13px;
    font-size: 23px;
    right: 10px;
    opacity: 0;
    position: absolute;
    color: white;
    transform: translateX(-100%);
  }
  .animateSlader .central .top {
    display: block;
    opacity: 1;
    transform: translateX(0%);
    transition: transform 400ms,
      opacity 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .reviewPic {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid white;
  }
  .reviewerName {
    bottom: 28px;
    font-size: 14px;
    left: 58px;
    position: absolute;
    color: white;
    opacity: 0;
    transform: translateY(-100%);
  }
  .animateSlader .central .reviewerName {
    display: block;
    opacity: 1;
    transform: translateY(0%);
    transition: transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .reviewerPosition {
    bottom: 11px;
    font-size: 14px;
    left: 57px;
    position: absolute;
    color: white;
    opacity: 0;
    transform: translateY(100%);
  }
  .animateSlader .central .reviewerPosition {
    display: block;
    opacity: 1;
    transform: translateY(0%);
    transition: transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .review {
    bottom: 44px;
    font-size: 13px;
    position: absolute;
    color: white;
    line-height: 1.3;
    padding: 15px;
  }
`;
