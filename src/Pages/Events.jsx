import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
// import React from "react";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../Css/carousel.css";
import diskusi from "../Image/diskusi.jpg";
import stuban from "../Image/Stuban1.jpg";
import ran from "../Image/Apaini.jpg";


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
      imgUrl: diskusi,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl: stuban,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl: ran,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl: stuban,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 6,
      imgUrl: ran,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <>
      <NavigationBar />
      <div className="">
        <div className="containerCarousel">
          <div
            className="loadbar"
            style={{ width: `${loadingProgress}%` }}
          ></div>
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <button className="ctaButtonP m-auto" onClick={handleClickPrev}>
                  <span className="spanButtonP">PREVIOUS</span>
                </button>
              </div>
              <div>
                <button className="ctaButtonN m-auto" onClick={handleClickNext}>
                  <span className="spanButtonN">NEXT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapCarou"></div>

      <Footer />
    </>
  );
};

export default Events;
