import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      title: "Website Fakultas",
      desc: "Jelajahi lebih dalam tentang fakultas kami di website fakultas kami!",
      link: {
        name: "https://it.maranatha.edu/",
        href: "https://it.maranatha.edu/",
      },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-instagram"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      ),

      title: "Instagram",
      desc: "Ikuti perjalanan kami di Instagram untuk melihat sisi lain yang belum pernah kamu temukan!",
      link: {
        name: "@semafit.maranatha",
        href: "https://www.instagram.com/semafit.maranatha/",
      },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-youtube"
          viewBox="0 0 16 16"
        >
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg>
      ),

      title: "Youtube",
      desc: "jangan lewatkan konten seru dan bermanfaat di akun YouTube kami!",
      link: {
        name: "SEMAFIT Maranatha",
        href: "https://www.youtube.com/@semafitmaranatha497",
      },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-envelope"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
      ),

      title: "Email",
      desc: "Ada pertanyaan atau ingin menjalin kerja sama dengan kami? Jangan ragu untuk menghubungi kami melalui email!",
      link: {
        name: "Send us DMs",
        href: "",
      },
    },
  ];
  return (
    <>
      <NavigationBar />

      <section>
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2 ">
          <div className="bg-gray-50 border-r-4">

          <iframe title="Maps" className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.11012184668033!2d107.58097030174395!3d-6.886467404489373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6873bb80d89%3A0xac80cbb5325a54e4!2sGraha%20Widya%20Maranatha!5e0!3m2!1sen!2sid!4v1681526535328!5m2!1sen!2sid" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

          <div className="bg-white py-12 md:py-10">
            <div className="mx-auto max-w-2xl px-4 lg:px-8">
              <div className="">
                <div className="text-center space-y-2">
                  <h1 className="text-gray-800 text-2xl font-bold sm:text-5xl">
                    Get in touch
                  </h1>
                  <p className="mt-3">Let us know how we can help</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-3">
                {contactMethods.map((item, idx) => (
                  <div key={idx} className="">
                    <a href={item.link.href}>
                    <div className="mt-5 flex items-center gap-x-3 justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                      
                      <div className="flex-none w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                        {item.icon}
                      </div>
                      <p className="text-gray-800 text-lg font-medium xl:text-xl">
                        {item.title}
                      </p>
                    </div>
                    </a>
                    <p className="text-center">{item.desc}</p>
                    <a
                      href={item.link.href}
                      className="flex items-center justify-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium "
                    >
                      {item.link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

              <div className="relative my-10">
                <span className="block w-full h-px bg-gray-300"></span>
                <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                  Or continue with
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 mt-7 lg:pb-12"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Name"
                      type="name"
                      id="name"
                      name="name"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
