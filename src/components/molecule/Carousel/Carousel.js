/* eslint-disable default-case */
import React, { useState } from "react";
import styled from "styled-components";
import data from "../../../mockApi/carousel";
import styles from "./Carousel.style";

const Carousel = (props) => {
  const { className } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posX1, setPosX1] = useState("");
  const [transit, setTransit] = useState(-100);
  const [setPosFinal] = useState("12");
  const [posX2, setPosX2] = useState("");
  const [leftSlide, setLeftSlide] = useState(data.cards.length - 1);
  const [centralSlide, setCentralSlide] = useState(0);
  const [rightSlide, setRightSlide] = useState(1);
  const [classN, setClassN] = useState("animateSlader");

  const shifting = (shiftA) => {
    setTransit(shiftA);
    setClassN("shift");
  };

  const loading = (get) => {
    setClassN("animateSlader");
    let index = currentIndex - get;
    let prevSlide = index - 1;
    let nextSlide = index + 1;
    switch (index) {
      case -1:
        index = data.cards.length - 1;
        prevSlide = index - 1;
        nextSlide = 0;
        break;
      case data.cards.length - 1:
        nextSlide = 0;
        break;
      case 0:
        prevSlide = data.cards.length - 1;
        break;
      case data.cards.length:
        index = 0;
        prevSlide = data.cards.length - 1;
        nextSlide = index + 1;
    }
    setLeftSlide(prevSlide);
    setCentralSlide(index);
    setRightSlide(nextSlide);
    setCurrentIndex(index);
    setTransit(-100);
  };

  const clickHandle = (e, get) => {
    e.preventDefault;
    const shiftA = -100 + get * 100;
    setTimeout(shifting, 0, shiftA);
    setTimeout(loading, 280, get);
  };

  const dragStart = (e) => {
    e.preventDefault();
    setPosX1(e.touches[0].clientX);
  };
  const dragMove = (e) => {
    e.preventDefault();
    const move = (e.touches[0].clientX - posX1) / 3;
    if (move >= -95 || move <= 95) {
      setPosX2(move);
      setTransit(move - 100);
      setPosFinal(e.touches[0].clientY);
    }
  };
  const dragEnd = () => {
    if (posX2 < 0) {
      if (posX2 < -20) {
        setTimeout(shifting, 0, -200);
        setTimeout(loading, 300, -1);
      } else {
        shifting(-100);
      }
    } else if (posX2 > 0) {
      if (posX2 > 20) {
        shifting(0);
        setTimeout(loading, 300, 1);
      } else {
        shifting(-100);
      }
    }
  };
  return (
    <div className={className}>
      <h2>Carousel</h2>
      <div className="slider-wrap" id="slider-wrap">
        <div className="slider" id="slider">
          <div
            id="holder"
            style={{ transform: `translateX(${transit}%)` }}
            className={`holder ${classN}`}
            onTouchStart={(e) => dragStart(e)}
            onTouchMove={(e) => dragMove(e)}
            onTouchEnd={(e) => dragEnd(e)}
          >
            <div
              className="slide"
              style={{
                backgroundImage: `url(${data.cards[leftSlide].picture})`,
              }}
            >
              <span className="text">{data.cards[leftSlide].description}</span>
            </div>
            <div
              className="slide central"
              style={{
                backgroundImage: `url(${data.cards[centralSlide].picture})`,
              }}
            >
              <span className="text">
                {data.cards[centralSlide].description}
              </span>
              <img
                src={data.cards[centralSlide].reviewPic}
                alt={data.cards[centralSlide].reviewerFirstName}
                className="reviewPic"
              />
              <span className="reviewerName">
                {data.cards[centralSlide].reviewerName}
              </span>
              <span className="reviewerPosition">
                {data.cards[centralSlide].reviewerPosition}
              </span>
              <span className="review">{data.cards[centralSlide].review}</span>
              <span className="top">
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </span>
            </div>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${data.cards[rightSlide].picture})`,
              }}
            />
          </div>
        </div>
        <nav className="navSlider">
          <svg
            version="1.1"
            onClick={(e) => clickHandle(e, +1)}
            id="leftArrow"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            preserveAspectRatio="xMaxYMin meet"
            width="80"
            height="150"
            viewBox="0 0 48.2 150"
          >
            <line x1="4.4" y1="75" x2="43.8" y2="3" />
            <line x2="43.8" y2="147" x1="4.4" y1="75" />
          </svg>
          <svg
            version="1.1"
            onClick={(e) => clickHandle(e, -1)}
            id="rightArrow"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            width="80"
            height="150"
            viewBox="0 0 48.2 150"
          >
            <line x1="43.8" y1="75" x2="4.4" y2="3" />
            <line x2="4.4" y2="147" x1="43.8" y1="75" />
          </svg>
        </nav>
      </div>
    </div>
  );
};

export default styled(Carousel)`
  ${styles}
`;
