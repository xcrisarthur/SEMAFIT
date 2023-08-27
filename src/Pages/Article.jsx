import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import { PaperClipIcon } from "@heroicons/react/20/solid";
// import "../Css/main.css";
import "../Js/script";
// import "../App.css";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";

const Article = () => {
  const swiperRef = useRef();

  const posts = [
    {
      title: "Sekarang ini, siapakah yang menjabat sebagai Ketua Semafit?",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://cdn.discordapp.com/attachments/952574676293517506/1018534446892322836/Desain_tanpa_judul_1.png",
      // img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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

      <div className="container p-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg bg-gray-100">
            <div className="flex justify-center py-5 bg-gray-300 rounded-lg">
              <div className="flex space-x-1">
                <input
                  type="text"
                  className="block w-full px-4 py-2 text-blue-700 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                />
                <button className="px-4 text-white bg-blue-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="my-5 bg-gray-300 rounded-lg">
              <div className="py-8 px-10">
                <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                  CATEGORIES
                </h3>
                {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p> */}
                <div className="mt-6 border-t border-gray-900">
                  <dl className="divide-y divide-gray-900">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-base font-medium text-gray-900">
                        Culture
                      </dt>
                      {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd> */}
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-base font-medium text-gray-900">
                        Culture
                      </dt>
                      {/* <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd> */}
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-base font-medium text-gray-900">
                        Culture
                      </dt>
                      {/* <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd> */}
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      {/* <dt className="text-sm font-medium text-gray-900">Salary expectation</dt> */}
                      {/* <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd> */}
                    </div>
                  </dl>
                </div>

                {/* <p className="text-3xl font-bold  px-10">CATEGORIES</p> */}

                {/* <p className="text-xl px-10">Culture</p>
              <hr className="border-b-2 border-black w-72 ms-10 mt-2" /> */}
              </div>
            </div>

            <div className="my-5 bg-gray-300 rounded-lg">
              <div className="py-8 px-10">
                <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                  TOP ARTICLE
                </h3>
              </div>
            </div>

            <div className="my-5 bg-gray-300 rounded-lg">
              <div className="py-8 px-10">
                <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                  COMMENTS
                </h3>
              </div>
            </div>
          </div>

          <div className=" rounded-lg bg-gray-100 lg:col-span-2">
            <div className="text-center bg-gray-300 rounded-lg px-5 py-5">
              <h1 className="text-3xl text-gray-800 font-semibold">Article</h1>
              <p className="mt-3 text-gray-500">
                Blogs that are loved by the community. Updated every hour.
              </p>
            </div>
            <div>
              <section className="mt-4 mx-auto max-w-screen-xl mb-10 bg-gray-300 rounded-lg">
                <div className=" grid sm:grid-cols-2 lg:grid-cols-2">
                  {posts.map((items, key) => (
                    <article
                      className="max-w-md mx-auto my-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
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
                          <h3 className="text-xl text-gray-900">
                            {items.title}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {items.desc}
                          </p>
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
                {/* <div className="flex justify-end">
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
                </div> */}
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Article;
