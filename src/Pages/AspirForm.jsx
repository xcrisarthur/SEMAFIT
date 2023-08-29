import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

const AspirForm = () => {
  return (
    <>
      <NavigationBar />
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h1 className="text-6xl">Aspiration Form</h1>
              <p className="max-w-xl text-lg pt-5 text-justify">
                Aspiration form adalah sebuah formulir yang digunakan untuk
                merekam dan mengumpulkan aspirasi atau harapan dari mahasiswa
                fakultas tekonologi informasi. Formulir ini digunakan untuk
                sarana untuk menyampaikan aspirasi atau harapan mereka terkait
                kebijakan atau program kampus, serta sebagai sarana untuk
                memberikan masukan tentang program dan kegiatan yang telah
                berlangsung.
              </p>

              <div className="mt-10 text-center">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-4xl font-bold text-green-600">
                  No Limits,{" "}
                  <span className="text-orange-600"> No Boundaries </span>
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
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

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="division"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only"
                    >
                      To Division
                    </label>
                    <select
                      id="division"
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                    >
                      <option defaultValue>To Division</option>
                      <option value="BPH">Badan Pengurus Harian</option>
                      <option value="DNS">Dana Usaha</option>
                      <option value="AKD">Akademik</option>
                      <option value="MMD">Multimedia</option>
                      <option value="NAKD">Non Akademik</option>
                      <option value="KRH">Kerohanian</option>
                      <option value="HMS">Hubungan Masyarakat</option>
                    </select>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Subject"
                      type="subject"
                      id="subject"
                      name="subject"
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

                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AspirForm;
