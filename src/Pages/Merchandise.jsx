import React, { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
// import { ChevronLeft, ChevronRight } from "react-feather";
// import Carousel from "../Components/Carousel";
import p1 from "../Image/Poster1.jpg";
import p2 from "../Image/poster2.jpg";
import p3 from "../Image/poster3.jpg";
import "../Js/script";

// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

const Merchandise = () => {
  // // Deklarasikan state untuk mengontrol tampilan konten
  // const [isContentVisible, setContentVisible] = useState(false);

  // // Fungsi untuk menangani perubahan tombol radio
  // const handleRadioChange = (e) => {
  //   setContentVisible(e.target.checked);
  // };

  // Deklarasikan state untuk mengontrol tombol yang aktif (misalnya, '1', '2', atau '3')
  const [activeButton, setActiveButton] = useState("1");

  // const slides = [
  //   {
  //     url: "https://cdn.discordapp.com/attachments/1014442386857926666/1130032328140402688/poster1.jpg",
  //   },
  //   {
  //     url: "https://cdn.discordapp.com/attachments/1014442386857926666/1130032327247016078/poster2.jpg",
  //   },
  //   {
  //     url: "https://cdn.discordapp.com/attachments/1014442386857926666/1130032327574159420/poster3.jpg",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  const imageRefs = [useRef(null), useRef(null), useRef(null)];

  const handleButtonClick = (index) => {
    if (imageRefs[index].current) {
      imageRefs[index].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavigationBar />

      {/* <div> */}
      {/* <button onClick={handleButtonClick}>Klik untuk pergi ke Gambar</button> */}

      {/* Konten lain */}

      {/* <img ref={imageRef} src="gambar.jpg" alt="Target Image" /> */}
      {/* </div> */}

      <div className="mt-6">
        <h1 className="text-center font-bold text-4xl" id="setor">
          SEMAFIT STORE
        </h1>
        <h2 className="text-center font-semibold text-2xl">@toko.semafit</h2>
      </div>

      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={p1} className="absolute block w-full" alt="Poster 1" />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={p2} className="absolute block w-full" alt="Poster 2"/>
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={p3} className="absolute block w-full" alt="Poster 3"/>
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
        </div>
      </div>
      
<div id="default-carousel" className="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" srcSet={p1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" srcSet={p2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" srcSet={p3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" srcSet={p1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" srcSet={p2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


<div id="indicators-carousel" className="relative w-full" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img srcSet="../Image/Poster1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out">
            <img srcSet="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out">
            <img srcSet="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out">
            <img srcSet="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out">
            <img srcSet="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


      {/* <div className="max-w-[100%] h-[500px] w-full m-auto py-6 px-4 relative group"> */}
        {/* <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div> */}
        {/* Left Arrow */}
        {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-56 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div> */}
        {/* Right Arrow */}
        {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-56 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div> */}
        {/* <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div> */}
      {/* </div> */}

      <div className="my-36 mx-auto text-center">
        <h2 className="text-center font-semibold text-2xl">Merchandise</h2>
        <h1 className="text-center font-bold text-4xl">TokoSemaFIT</h1>
        <h2 className="text-center text-xl mx-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          quisquam error ipsa suscipit, eaque cupiditate cumque exercitationem
          laboriosam neque delectus cum facilis aut ab dolorem quasi, distinctio
          earum eos? Fuga?
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 my-24">
        <div className="h-32 rounded-lg flex justify-center items-center h-100">
          <img src="src/Image/Logo.png" alt="Logo" />
        </div>

        <div className="h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-5xl text-center">
            Latest Update
          </h2>

          <a
            className="my-3 group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="/download"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              Check out our Instagram Account
            </span>
          </a>
        </div>

        <div className="h-32 rounded-lg flex justify-center items-center h-100">
          <img src="src\Image\Acc.png" alt="Logo" />
        </div>
      </div>

      <section className="flex items-center justify-center">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 text-center">
          <header className="text-center">
            <p className="max-w-md mx-auto mt-4 text-gray-500">Bundle</p>

            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Anak Kampus
            </h2>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-2 ">
            <li className="flex flex-col items-center">
              <a href="#" className="block overflow-hidden group">
                <img
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124012611273506916/Snapinsta.app_339676838_702310228250744_5671931551316459820_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] mx-auto"
                />

                <div className="relative pt-3 bg-white text-center">
                  <p className="mt-2 text-2xl">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      Rp. 40.000
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li className="flex flex-col items-center">
              <a className="block overflow-hidden group">
                <img
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124012610950529045/Snapinsta.app_339665792_212356301414562_5563539063557496738_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] mx-auto"
                />

                <div className="relative pt-3 bg-white text-center">
                  <p className="mt-2 text-2xl">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 ">
                      {" "}
                      Pilihan Desain Lanyard
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              NOLI & NOBO
            </h2>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-2 text-center">
            <li>
              <a className="block overflow-hidden group">
                <img
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124016078700433579/Snapinsta.app_339995645_4218500991708528_499988992288132034_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] mx-auto"
                />

                <div className="relative pt-3 bg-white">
                  <p className="mt-2 text-2xl">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      Rp. 5.000
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a className="block overflow-hidden group">
                <img
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124016078939492424/Snapinsta.app_339668173_190516797101727_8692166284739220016_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] mx-auto"
                />

                <div className="relative pt-3 bg-white">
                  <p className="mt-2 text-2xl">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 ">
                      {" "}
                      Rp. 5.000
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* <section className="overflow-hidden bg-[url(https://cdn.discordapp.com/attachments/1014443032797519914/1124009243905904701/Desain_tanpa_judul.jpg)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-5xl">
              Latest Update
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="https://www.instagram.com/toko.semafit/"
                target="blank"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl text-center">
              Product Catalog
            </h2>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3">
            <li className="flex flex-col items-center">
              <a href="#" className="block overflow-hidden group">
                <img
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018359856537621/Snapinsta.app_340161769_245411251269892_4144012272337964815_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                {/* <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div> */}
              </a>

              <a
                className="my-5 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                href="https://www.instagram.com/p/CquDS3mLM0k/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                target="blank"
              >
                Check Catalog
              </a>
            </li>

            <li className="flex flex-col items-center">
              <a href="#" className="block overflow-hidden group">
                <img
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124025888250527774/Snapinsta.app_339702244_956481542034564_7910274465963337747_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </a>

              <a
                className="my-5 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                href="https://www.instagram.com/p/CquELxVreUE/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                target="blank"
              >
                Check Catalog
              </a>
            </li>

            <li className="flex flex-col items-center">
              <a href="#" className="block overflow-hidden group">
                <img
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124026137673220278/Snapinsta.app_339807749_168030642817173_6129546957616000384_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </a>

              <a
                className="my-5 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                href="https://www.instagram.com/p/CquDkgerpFr/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                target="blank"
              >
                Check Catalog
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Catalog of Lanyards"
                srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018359856537621/Snapinsta.app_340161769_245411251269892_4144012272337964815_n_1024.jpg"
                className="aspect-square w-full rounded-xl object-cover"
                ref={imageRefs[0]}
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="1"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018326700564480/Snapinsta.app_339716358_882571886176223_4265324868679345371_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="2"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018326406959225/Snapinsta.app_339965353_610524907294750_1075715689311415708_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="3"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018329061957682/Snapinsta.app_339999901_1182574702402290_8050494206062948362_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />
                <img
                  alt="4"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018328571219968/Snapinsta.app_339712015_1604235683423888_8598257803674792375_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="5"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018328202125312/Snapinsta.app_340170066_1370101693786278_960693130576035238_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="6"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018327858188328/Snapinsta.app_339795517_963906711289281_14087211912252100_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="7"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018327585562764/Snapinsta.app_339984319_733548421485399_5802975702071825365_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="8"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018327195488327/Snapinsta.app_339802175_954462845916893_4879153512873879182_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="9"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018326943838279/Snapinsta.app_340032579_939251187101575_7809593834594327797_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="10"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1124018361681063956/Snapinsta.app_339819310_247680927630417_3236153786451158324_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>

              <img
                alt="Catalog of Notebooks"
                srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642860704702515/nbPoster.jpg"
                className="aspect-square w-full rounded-xl object-cover"
                ref={imageRefs[1]}
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="1"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642861103157318/nb1.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="2"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642861346443264/nb2.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="3"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642861619060756/nb3.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="4"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642861853937745/nb4.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="5"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642862168526848/nb5.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="6"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642862470504490/nb6.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="7"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642860234936330/nb7.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="8"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145642860448862301/nb8.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>

              <img
                alt="Catalog of KeyTag"
                srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145641938226270349/keytaPoster.jpg"
                className="aspect-square w-full rounded-xl object-cover"
                ref={imageRefs[2]}
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="1"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145641939107053578/noli.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="2"
                  srcSet="https://cdn.discordapp.com/attachments/1014443032797519914/1145641938607943750/nobo.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="sticky top-20 ">
              {/* <strong
          className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Pre Order
        </strong> */}

              <fieldset className="space-y-4">
                <div>
                  <div className="my-10">
                    <input
                      type="radio"
                      name="DeliveryOption"
                      value="1"
                      id="Button1"
                      className="peer hidden [&:checked_+_label_svg]:block"
                      checked={activeButton === "1"}
                      onChange={(e) => setActiveButton(e.target.value)}
                    />
                    <label
                      onClick={() => handleButtonClick(0)}
                      htmlFor="Button1"
                      className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          className="hidden h-5 w-5 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-gray-700">Catalog of Lanyards</p>
                      </div>
                    </label>
                    {activeButton === "1" && (
                      <div id="section-1" className="product-section">
                        <div className="mt-8 flex justify-between">
                          <div className="max-w-[35ch] space-y-2">
                            <h1 className="text-xl font-bold sm:text-2xl">
                              Catalog of Lanyards
                            </h1>

                            <p className="text-sm">Highest Rated Product</p>

                            <div className="-ms-0.5 flex">
                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-gray-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>

                          <p className="text-lg font-bold">Rp. 25.000 </p>
                        </div>

                        <div className="mt-4">
                          <div className="prose max-w-none">
                            <p>
                              {" "}
                              𝘺𝘰, 𝘩𝘪𝘢𝘴𝘪 𝘒𝘢𝘳𝘵𝘶 𝘔𝘢𝘩𝘢𝘴𝘪𝘴𝘸𝘢 𝘺𝘢𝘯𝘨 𝘬𝘢𝘮𝘶 𝘮𝘪𝘭𝘪𝘬𝘪 𝘥𝘦𝘯𝘨𝘢𝘯
                              𝘥𝘦�𝘢𝘪𝘯 �𝘭𝘢𝘯𝘺𝘢𝘳𝘥 𝘺𝘢𝘯𝘨 𝘴𝘢𝘯𝘨𝘢𝘵 𝘶𝘯𝘪𝘬 𝘥𝘢𝘳𝘪 𝘬𝘢𝘮𝘪!!!
                              𝘋𝘦𝘯𝘨𝘢𝘯 25𝘬 𝘢𝘫𝘢, 𝘬𝘢𝘮𝘶 𝘶𝘥𝘢𝘩 𝘣𝘪𝘴𝘢 𝘮𝘦𝘯𝘥𝘢𝘱𝘢𝘵𝘬𝘢𝘯 𝘴𝘦𝘣𝘶𝘢𝘩
                              𝘭𝘢𝘯𝘺𝘢𝘳𝘥 𝘥𝘦𝘯𝘨𝘢𝘯 𝘨𝘢𝘺𝘢 𝘺𝘢𝘯𝘨 𝘬𝘦𝘬𝘪𝘯𝘪𝘢𝘯. 𝘑𝘢𝘯𝘨𝘢𝘯 𝘳𝘢𝘨𝘶𝘬𝘢𝘯
                              𝘬𝘶𝘢𝘭𝘪𝘵𝘢𝘴 𝘺𝘢𝘯𝘨 𝘬𝘢𝘮𝘪 𝘵𝘢𝘸𝘢𝘳𝘬𝘢𝘯, 𝘵𝘦𝘳𝘫𝘢𝘮𝘪𝘯 𝘣𝘢𝘪𝘬 👍😄
                              𝘈𝘺𝘰, 𝘣𝘶𝘳𝘶𝘢𝘯 𝘣𝘦𝘭𝘪 𝘴𝘦𝘬𝘢𝘳𝘢𝘯𝘨 𝘴𝘦𝘣𝘦𝘭𝘶𝘮 𝘬𝘦𝘩𝘢𝘣𝘪𝘴𝘢𝘯!!!
                            </p>
                          </div>
                          <div className="mt-8 flex gap-4">
                            <a
                              href="https://api.whatsapp.com/message/OMOFULN4CYZNC1?autoload=1&app_absent=0"
                              className="block rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                              role="button"
                              target="blank"
                            >
                              Contact For Order
                            </a>
                          </div>
                          {/* <button className="mt-2 text-sm font-medium underline">Read More</button> */}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="my-10">
                    <input
                      type="radio"
                      name="DeliveryOption"
                      value="2"
                      id="Button2"
                      className="peer hidden [&:checked_+_label_svg]:block"
                      checked={activeButton === "2"}
                      onChange={(e) => setActiveButton(e.target.value)}
                      onClick={() => handleButtonClick(1)}
                    />
                    <label
                      htmlFor="Button2"
                      className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          className="hidden h-5 w-5 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-gray-700">Catalog of Notebooks</p>
                      </div>
                    </label>
                    {activeButton === "2" && (
                      <div>
                        <div className="mt-8 flex justify-between">
                          <div className="max-w-[35ch] space-y-2">
                            <h1 className="text-xl font-bold sm:text-2xl">
                              Catalog of Notebooks
                            </h1>

                            <p className="text-sm">Highest Rated Product</p>

                            <div className="-ms-0.5 flex">
                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-gray-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>

                          <p className="text-lg font-bold">Rp. 25.000 </p>
                        </div>

                        <div className="mt-4">
                          <div className="prose max-w-none">
                            <p>
                              {" "}
                              📓✨ Hai, mahasiswa! Mau punya notebook yang keren
                              dan kekinian? Catalog of Notebooks dari kami
                              adalah pilihan yang tepat! Dengan harga Rp25.000
                              saja, kamu sudah bisa mendapatkan notebook dengan
                              desain yang unik dan menarik. Notebook kami
                              terbuat dari bahan berkualitas tinggi dan memiliki
                              banyak pilihan desain yang bisa kamu pilih sesuai
                              dengan gayamu. Jadi, tunggu apa lagi? Segera beli
                              notebook dari kami dan tunjukkan kepribadianmu
                              yang unik! 💡📝
                            </p>
                          </div>
                          <div className="mt-8 flex gap-4">
                            <a
                              href="https://api.whatsapp.com/message/OMOFULN4CYZNC1?autoload=1&app_absent=0"
                              className="block rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                              role="button"
                              target="blank"
                            >
                              Contact For Order
                            </a>
                          </div>
                          {/* <button className="mt-2 text-sm font-medium underline">Read More</button> */}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="my-10">
                    <input
                      type="radio"
                      name="DeliveryOption"
                      value="3"
                      id="Button3"
                      className="peer hidden [&:checked_+_label_svg]:block"
                      checked={activeButton === "3"}
                      onChange={(e) => setActiveButton(e.target.value)}
                      onClick={() => handleButtonClick(2)}
                    />
                    <label
                      htmlFor="Button3"
                      className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          className="hidden h-5 w-5 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-gray-700">Catalog of KeyTag</p>
                      </div>
                    </label>
                    {activeButton === "3" && (
                      <div>
                        <div className="mt-8 flex justify-between">
                          <div className="max-w-[35ch] space-y-2">
                            <h1 className="text-xl font-bold sm:text-2xl">
                              Catalog of KeyTag
                            </h1>

                            <p className="text-sm">Highest Rated Product</p>

                            <div className="-ms-0.5 flex">
                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>

                              <svg
                                className="h-5 w-5 text-gray-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>

                          <p className="text-lg font-bold">Rp. 5.000 </p>
                        </div>

                        <div className="mt-4">
                          <div className="prose max-w-none">
                            <p>
                              {" "}
                              🔑🏷️ Hai, pecinta fashion! Ingin tampil stylish
                              dan keren? Catalog of KeyTag dari kami adalah
                              solusinya! Dengan harga Rp5.000 saja, kamu sudah
                              bisa mendapatkan keytag dengan desain yang unik
                              dan menarik. Keytag kami terbuat dari bahan
                              berkualitas tinggi dan tersedia dalam berbagai
                              pilihan desain, mulai dari desain kartun, anime,
                              hingga desain abstrak. Jadi, tunggu apa lagi?
                              Segera beli keytag dari kami dan tambahkan
                              sentuhan gayamu sendiri! 🗝️🌟
                            </p>
                          </div>
                          <div className="mt-8 flex gap-4">
                            <a
                              href="https://api.whatsapp.com/message/OMOFULN4CYZNC1?autoload=1&app_absent=0"
                              className="block rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                              role="button"
                              target="blank"
                            >
                              Contact For Order
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <legend className="sr-only">Delivery</legend>
              </fieldset>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Merchandise;
