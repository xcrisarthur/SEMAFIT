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

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold sm:text-5xl">UPCOMING EVENTS!!!</h2>
      </div>
      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
        <img
          alt="Violin"
          src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-se-[60px]"
        />
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-6xl">
              R E V O L U T I A
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <p class="text-5xl text-center py-10 font-black	"> PROGRAM KERJA </p>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-lg bg-gray-900">
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  datetime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2023</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Month ??</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="Guitar"
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      INSIGHT IT
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="rounded-lg bg-gray-100">
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  datetime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2023</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Month ??</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="Guitar"
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">ITPC</h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="rounded-lg bg-gray-100">
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  datetime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2023</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Month ??</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="Guitar"
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      TUTOR IT
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;
