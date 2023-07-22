import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

const Article = () => {
  return (
    <>
      <NavigationBar />
      <div className="container p-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg bg-gray-700">
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
              <div className="py-8">
              <p className="text-3xl font-bold  px-10">CATEGORIES</p>

<p className="text-xl px-10">Culture</p>
<hr className="border-b-2 border-black w-72 ms-10 mt-2" />

<p className="text-xl px-10 mt-7">Culture</p>
<hr className="border-b-2 border-black w-72 ms-10 mt-2" />

<p className="text-xl px-10 mt-7">Culture</p>
<hr className="border-b-2 border-black w-72 ms-10 mt-2" />
              </div>
              
            </div>

            <div className="my-5 bg-gray-300 rounded-lg">
              <div className="py-8">
              <p className="text-3xl font-bold  px-10">TOP ARTICLE</p>

              </div>
              
            </div>

            <div className="my-5 bg-gray-300 rounded-lg">
              <div className="py-8">
              <p className="text-3xl font-bold  px-10">COMMENTS</p>

              </div>
              
            </div>
          </div>

          <div className="h-40 rounded-lg bg-gray-700 lg:col-span-2"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Article;
