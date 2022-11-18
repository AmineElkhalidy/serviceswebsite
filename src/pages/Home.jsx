import React from "react";

// motion
import { motion } from "framer-motion";

// Header
import Header from "../components/Layout/Header/Header";

// Location icon
import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

// Images
import Devmain from "../assets/images/developping-main-color.svg";
import Devsec from "../assets/images/developping-second-color.svg";

const Home = () => {
  return (
    <React.Fragment>
      {/* Header component */}
      <Header />

      {/* Main */}
      <main>
        <section className="min-h-[calc(100vh-5rem)] max-w-6xl mx-auto sm:flex sm:justify-center sm:items-center">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="grid px-6 space-y-10  sm:grid-cols-2 sm:space-y-0 "
          >
            <div className="space-y-4 pt-10 sm:pt-0">
              <span className="inline-flex items-center gap-2 font-medium md:text-lg">
                <MapPinIcon className="h-5 w-5" /> Marrakech, Morocco
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl">
                Hello, <br />
                I'm <span>Amine Elkhalidy</span>
              </h1>

              <p className="max-w-md text-lg text-gray-200 md:text-xl lg:text-2xl">
                I am a{" "}
                <span className="inline-block bg-blue text-gray-800">
                  web developer
                </span>
                , I build things that live on{" "}
                <span className="inline-block bg-blue text-gray-800">
                  the internet
                </span>
              </p>
            </div>

            <img
              className="justify-self-center w-[70%] md:w-[80%]"
              src={Devmain}
              alt="Developer developping an application"
            />
          </motion.div>
        </section>

        {/* Services */}

        {/* Features */}
        <section
          className="min-h-screen bg-slate-100 sm:h-screen"
          id="features"
        >
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto h-full flex justify-center items-center px-6 py-16 md:px-0 md:py-0"
          >
            <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="text-center grid gap-4">
                <img
                  src="https://cdn1.dan.com/assets/public/flame-70467fdaea05848dd31989d3d69d8e40532ca4a367a35b2b4afb335f58d1cbaf.svg"
                  alt="feature logo"
                  className="justify-self-center"
                />

                <div className="text-gray space-y-2">
                  <h3 className="text-main text-2xl font-semibold xl:text-3xl">
                    High quality
                  </h3>
                  <p className="max-w-xs xl:text-lg">
                    I will make the best application for you in terms of quality
                  </p>
                  <a
                    href="https://amineelkhalidy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue font-medium"
                  >
                    Visit my portfolio{" "}
                    <span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="text-center grid gap-4">
                <img
                  src="https://cdn2.dan.com/assets/public/cards-1496ee9a2a19fa194eec03d322f58599a5e67615507f7f16d11546dc612ab8a4.svg"
                  alt="feature logo"
                  className="justify-self-center"
                />

                <div className="text-gray space-y-1">
                  <h3 className="text-main text-2xl font-semibold xl:text-3xl">
                    Web Hosting
                  </h3>
                  <p className="max-w-xs xl:text-lg">
                    I will make the best application for you in terms of quality
                  </p>
                  <a
                    href="https://amineelkhalidy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue font-medium"
                  >
                    Visit my portfolio{" "}
                    <span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="text-center grid gap-4">
                <img
                  src="https://cdn1.dan.com/assets/public/premium-59f1968fb4be2fde611d8aa97bbb39fac1fc5490ab14fd6d209427dfc527fe3e.svg"
                  alt="feature logo"
                  className="justify-self-center"
                />

                <div className="text-gray space-y-1">
                  <h3 className="text-main text-2xl font-semibold xl:text-3xl">
                    SEO
                  </h3>
                  <p className="max-w-xs xl:text-lg">
                    I will make the best application for you in terms of quality
                  </p>
                  <a
                    href="https://amineelkhalidy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue font-medium"
                  >
                    Visit my portfolio{" "}
                    <span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
