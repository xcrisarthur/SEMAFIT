import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import React from "react";

const About = () => {
  return (
    <>
      <NavigationBar />
      <div className="container max-w-screen-xl mx-auto my-5">
        <h1 className="text-6xl font-extrabold text-center">Who We Are</h1>
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <img
                  alt="Student"
                  src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />

                <img
                  alt="Student"
                  src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />
              </div>
              <div className="bg-gray-600 my-auto  p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ">
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    S E M A F I T
                  </h2>

                  <p className="hidden text-white/90 sm:mt-4 sm:block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    egestas tempus tellus etiam sed. Quam a scelerisque amet
                    ullamcorper eu enim et fermentum, augue. Aliquet amet
                    volutpat quisque ut interdum tincidunt duis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
