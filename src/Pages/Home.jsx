import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import NavigationBar from "../Components/NavigationBar";
import Home1 from "../Components/Home1";
import Foto1 from "../Image/diskusi.jpg";
import Foto2 from "../Image/Apaini.jpg";
import Foto3 from "../Image/Stuban1.jpg";
import Footer from "../Components/Footer";

const Home = () => {
  const swiperRef = useRef();

  const posts = [
    {
      title: "Sekarang ini, siapakah yang menjabat sebagai Ketua Semafit?",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://cdn.discordapp.com/attachments/952574676293517506/1018534446892322836/Desain_tanpa_judul_1.png",
      authorLogo:
        "https://cdn.discordapp.com/attachments/1014443032797519914/1095572020701450300/20230331175602_IMG_5990.jpg",
      authorName: "Cristianto",
      date: "Jan 4 2023",
    },
    {
      title:
        "Perbedaan antara sistem informasi dan teknik informatika di Maranatha yang menarik untuk diketahui?",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo:
        "https://cdn.discordapp.com/attachments/952574676293517506/1016351896400838766/cowo.png",
      authorName: "Arthur",
      date: "Mar 14 2023",
    },
    {
      title:
        "Apa alasan yang menarik untuk bergabung di organisasi, dan apa yang membuat organisasi menjadi menarik bagi kita?",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://cdn.discordapp.com/attachments/952574676293517506/1095574544854552687/41442.jpg",
      authorLogo:
        "https://cdn.discordapp.com/attachments/952574676293517506/1016351896400838766/cowo.png",
      authorName: "Rito",
      date: "Apr 5 2023",
    },
  ];
  return (
    <>
      <NavigationBar />
      <Home1 />
      <section className="bg-gray-100">
        <div className="mx-auto max-w-[1340px] sm:px-6 sm:py-10 lg:mr-0 lg:pl-8 lg:pr-0">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16 ">
            <div className="max-w-xl text-center sm:text-left mt-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
                Visi & Misi
              </h2>
              <p className="mt-4 text-gray-500">
                Berikut adalah visi dan misi dari Semafit! <br />
                Anda dapat memanfaatkan tombol navigasi di bawah ini untuk
                melompat ke slide berikutnya atau sebelumnya dengan mudah!
              </p>
              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  onClick={() => swiperRef.current.slidePrev()}
                  className="prev-button rounded-full border border-gray-600 p-3 text-gray-600 hover:bg-gray-600 hover:text-white"
                >
                  <span className="sr-only">Previous Slide</span>
                  <svg
                    className="h-5 w-5 -rotate-180 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => swiperRef.current.slideNext()}
                  className="next-button rounded-full border border-gray-600 p-3 text-gray-600 hover:bg-gray-600 hover:text-white"
                >
                  <span className="sr-only">Next Slide</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0 ">
              <div className="swiper-container !overflow-hidden ">
                <Swiper
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  spaceBetween={50}
                  slidesPerView={1}
                  breakpoints={{
                    768: { slidesPerView: 1.3 },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <blockquote className="flex h-full flex-col justify-between bg-white p-12 ">
                        <div className="">
                          <div className="mt-4">
                            <p className="text-2xl font-bold text-black sm:text-3xl">
                              Visi
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-500">
                              Mewujudkan semafit bukan hanya sekadar senat
                              mahasiswa, tapi juga wadah bagi para mahasiswa
                              yang mengasah kualitas diri menjadi sosok yang
                              berintegritas, progresif, dan cerdas dengan
                              inovasi tanpa batas. Tidak hanya itu, Semafit juga
                              meneguhkan nilai-nilai penting seperti integritas,
                              kepedulian, dan keunggulan sebagai pilar utama
                              dalam perjalanan kehidupan mereka.
                            </p>
                          </div>
                        </div>

                        <footer className="mt-8 text-sm text-gray-500">
                          &mdash; Yehezkiel David Setiawan (Ketua Semafit)
                        </footer>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                        <div>
                          <div className="flex gap-0.5 text-green-500">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold text-black sm:text-3xl">
                              Misi
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-500">
                              Senat Mahasiswa Fakultas Teknologi Informasi
                              terdiri dari 6 poin penting. <br />
                              1. menyelenggarakan program kerja yang dapat
                              mendorong kemajuan mahasiswa di bidang teknologi
                              informasi. <br />
                              2. memperkuat hubungan persaudaraan dan
                              solidaritas antar mahasiswa di fakultas ini
                              melalui program-program yang menarik.
                            </p>
                          </div>
                        </div>

                        <footer className="mt-8 text-sm text-gray-500">
                          &mdash; Yehezkiel David Setiawan (Ketua Semafit)
                        </footer>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                        <div>
                          <div className="flex gap-0.5 text-green-500">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold text-black sm:text-3xl">
                              Misi
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-500">
                              3. memberikan kesempatan pada mahasiswa untuk
                              mengasah kemampuan soft skill dan hard skill dalam
                              berbagai kegiatan. <br />
                              4. memperluas jaringan senat mahasiswa fakultas
                              ini hingga mencapai lingkungan kampus maupun di
                              luar kampus.
                            </p>
                          </div>
                        </div>

                        <footer className="mt-8 text-sm text-gray-500">
                          &mdash; Yehezkiel David Setiawan (Ketua Semafit)
                        </footer>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                        <div>
                          <div className="flex gap-0.5 text-green-500">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold text-black sm:text-3xl">
                              Misi
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-500">
                              5. menciptakan kepengurusan senat mahasiswa yang
                              tak hanya merangkul dan peduli terhadap mahasiswa,
                              tetapi juga siap menampung aspirasi demi membangun
                              fakultas teknologi informasi yang lebih baik.{" "}
                              <br />
                              6. menciptakan kepengurusan senat mahasiswa yang
                              disiplin, berintegritas, handal, serta aktif dalam
                              menjalankan tugasnya sebagai wakil mahasiswa di
                              fakultas ini.
                            </p>
                          </div>
                        </div>

                        <footer className="mt-8 text-sm text-gray-500">
                          &mdash; Yehezkiel David Setiawan (Ketua Semafit)
                        </footer>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <div className="swiper-wrapper"></div>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="mt-8 pb-10 flex justify-center gap-4 lg:hidden">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              aria-label="Previous slide"
              className="prev-button rounded-full border border-gray-600 p-4 text-gray-600 hover:bg-gray-600 hover:text-white"
            >
              <svg
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button
              onClick={() => swiperRef.current.slideNext()}
              aria-label="Next slide"
              className="next-button rounded-full border border-gray-600 p-4 text-gray-600 hover:bg-gray-600 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Gallery
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Berikut adalah beberapa dokumentasi menarik yang kami abadikan
              dari kegiatan yang kami jalankan!
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#" className="relative block group">
                <img
                  src={Foto1}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Diskusi</h3>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="relative block group">
                <img
                  src={Foto2}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Hah</h3>
                </div>
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" className="relative block group">
                <img
                  src={Foto3}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    HMPSTIF x SEMAFIT
                  </h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 mb-10">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">Article</h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={key}
            >
              <a href={items.href}>
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full h-48 rounded-t-md"
                />
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                  <div className="flex-none w-10 h-10 rounded-full">
                    <img
                      src={items.authorLogo}
                      className="w-full h-full rounded-full"
                      alt={items.authorName}
                    />
                  </div>
                  <div className="ml-3">
                    <span className="block text-gray-900">
                      {items.authorName}
                    </span>
                    <span className="block text-gray-400 text-sm">
                      {items.date}
                    </span>
                  </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">{items.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                </div>
              </a>
              <div className="flex justify-end m-5">
                <button
                  className="inline-flex items-center gap-2 rounded border border-gray-600 px-8 py-3 text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring active:bg-gray-500"
                  href=""
                >
                  <span className="text-sm font-medium">
                    {" "}
                    Baca Selengkapnya{" "}
                  </span>

                  <svg
                    className="h-5 w-5"
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
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="mt-5 group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-gray-600 focus:outline-none focus:ring active:text-gray-500 "
            href="/download"
          >
            <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
              <svg
                className="h-5 w-5"
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

            <span className="text-sm font-medium transition-all group-hover:mr-4">
              Baca Artikel Lainnya
            </span>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
