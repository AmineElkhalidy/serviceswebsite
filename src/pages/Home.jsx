import React from "react";

// motion
import { motion } from "framer-motion";

// Header
import Header from "../components/Layout/Header/Header";

// Location icon
import { MapPinIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <React.Fragment>
      {/* Header component */}
      <Header />

      <main className="overflow-hidden">
        {/* Hero section */}
        <section className="px-6" id="hero">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="h-6 w-6" /> Marrakech, Morocco
              </span>

              <h1></h1>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section className="" id="hero">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div></div>
          </motion.div>
        </section>

        {/* Features */}
        <section className="" id="hero">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div></div>
          </motion.div>
        </section>

        {/* Contact */}
        <section className="" id="hero">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div></div>
          </motion.div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
