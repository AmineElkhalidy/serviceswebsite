import React from "react";

// motion
import { motion } from "framer-motion";

// Header
import Header from "../components/Layout/Header/Header";

// Location icon
import {
  MapPinIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

// Linkedin & Whatsapp
import { RiLinkedinLine } from "react-icons/ri";
import { BsWhatsapp, BsTelephoneOutbound, BsEnvelope } from "react-icons/bs";

// Images
import Devmain from "../assets/images/developping-main-color.svg";
import Devsec from "../assets/images/developping-second-color.svg";

// Logo
import Logo from "../assets/images/Amine.png";

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
            className="grid px-6 space-y-10 sm:grid-cols-2 sm:space-y-0 "
          >
            <div className="space-y-4 pt-10 sm:pt-0">
              <span className="inline-flex items-center gap-2 md:text-lg">
                <MapPinIcon className="h-5 w-5" /> Marrakech, Morocco
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
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
                    I will make the best application for you in terms of
                    quality.
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
                    I will make sure your website get hosted by the best hosting
                    providers.
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
                    I will make sure that your website follows best practices.
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

        {/* Contact section */}
        <section className="h-screen bg-[#04294F]" id="contact">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-center items-center gap-12 sm:flex-row sm:gap-20"
          >
            <div className="text-center">
              <h2 className="text-xl mb-2 font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
                Have a project in your mind ?
              </h2>
              <p className="text-lg mb-3 lg:text-xl">
                Contact me and I will handle the rest.
              </p>

              <ul className="flex justify-center items-center gap-6 mb-12 xl:gap-12">
                <li>
                  <a
                    href="mailto:a.amineelkhalidy@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className=""
                  >
                    <BsEnvelope className="h-5 w-5 md:h-6 duration-300 hover:text-blue md:w-6 xl:w-7 xl:h-7" />
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+212611154307"
                    target="_blank"
                    rel="noreferrer noopener"
                    className=""
                  >
                    <BsTelephoneOutbound className="h-5 w-5 duration-300 hover:text-blue md:h-6 md:w-6 xl:w-7 xl:h-7" />
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+212611154307"
                    target="_blank"
                    rel="noreferrer noopener"
                    className=""
                  >
                    <RiLinkedinLine className="h-5 w-5 duration-300 hover:text-blue md:h-6 md:w-6 xl:w-8 xl:h-8" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/212611154307"
                    target="_blank"
                    rel="noreferrer noopener"
                    className=""
                  >
                    <BsWhatsapp className="h-5 w-5 duration-300 hover:text-blue md:h-6 md:w-6 xl:w-7 xl:h-7" />
                  </a>
                </li>
              </ul>

              <a
                href="https://amineelkhalidy.vercel.app"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 p-3 rounded-md bg-blue text-white group duration-300 hover:bg-white hover:text-[#04294F] xl:text-xl"
              >
                Visit my profile{" "}
                <ArrowTopRightOnSquareIcon className="w-4 h-4 xl:w-6 xl:h-6" />
              </a>
            </div>

            <img src={Logo} alt="Logo" />
          </motion.div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
