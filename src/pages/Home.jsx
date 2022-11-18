import React from "react";

// motion
import { motion } from "framer-motion";

// Header
import Header from "../components/Layout/Header/Header";

// Location icon
import { MapPinIcon } from "@heroicons/react/24/outline";

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
        <section className="min-h-[calc(100vh-5rem)] max-w-6xl mx-auto  flex justify-center items-center">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="grid px-6 space-y-6  sm:grid-cols-2 sm:space-y-0 "
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 font-medium md:text-lg">
                <MapPinIcon className="h-5 w-5" /> Marrakech, Morocco
              </span>

              <h1 className="text-3xl font-thin md:text-4xl lg:text-5xl">
                Hello, <br />
                I'm <span>Amine Elkhalidy</span>
              </h1>

              <p className="max-w-md text-lg text-gray-200 md:text-xl lg:text-2xl">
                I am a{" "}
                <span className="inline-block bg-blue text-gray-800">
                  web developer
                </span>
                , I build things that lives on{" "}
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
        <section className="h-screen bg-white" id="features"></section>
      </main>
    </React.Fragment>
  );
};

export default Home;
