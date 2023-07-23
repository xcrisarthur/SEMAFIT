import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
// import React from "react";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../Css/carousel.css";

const Events = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".itemCarousel");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".itemCarousel");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:
        "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl:
        "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 6,
      imgUrl:
        "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <>
      <NavigationBar />
      <div className="container py-96">
      <div className="containerCarousel">
        <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
        <div id="slideCarousel" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="itemCarousel"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className="contentCarousel">
                <div className="nameCarousel">{item.name}</div>
                <div className="desCarousel">{item.desc}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttonsCarousel">
          <button id="prev" onClick={handleClickPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleClickNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Events;
