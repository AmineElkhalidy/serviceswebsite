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
        <section className="max-w-6xl mx auto px-6" id="hero">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1>
                Hello,
                <br />
                I'm Amine Elkhalidy
              </h1>
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
