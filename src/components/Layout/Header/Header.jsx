import React from "react";

// Menu icon
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Logo
import Amine from "../../../assets/images/Amine.png";

const Header = () => {
  // Nav state
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={`w-full font-second bg-main ${
        open && "bg-gray-100"
      } duration-500`}
    >
      <nav className="h-20 max-w-6xl mx-auto px-6 flex justify-between items-center ">
        <a
          href="#"
          className={`${
            open ? "text-main" : "text-gray-100"
          } inline-flex items-center gap-1 text-lg font-semibold cursor-pointer`}
        >
          <img className="h-[2rem]" src={Amine} alt="Header logo" />
          <span>Amine Elkhalidy</span>
        </a>

        {/* Navbar for mobile */}
        {open && (
          <div className="fixed top-20 left-0 z-50 bg-main w-full py-12 rounded-bl-3xl rounded-br-3xl md:hidden">
            <ul className="flex flex-col space-y-6 justify-center items-center">
              <li>
                <a
                  href="#services"
                  className="text-xl font-medium duration-300 hover:text-second"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-xl font-medium duration-300 hover:text-second"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-xl font-medium duration-300 hover:text-second"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        {open ? (
          <div
            className="inline-block cursor-pointer md:hidden"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className={`${open && "text-main"} h-8 w-8`} />
          </div>
        ) : (
          <div
            className="inline-block cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
          >
            <Bars2Icon className="h-8 w-8 text-gray-100" />
          </div>
        )}

        {/* Navbar for desktop */}
        <div className="hidden md:block">
          <ul className="flex gap-12">
            <li>
              <a
                href="#services"
                className="text-gray-100 text-lg font-medium duration-300 hover:text-second"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-100 text-lg font-medium duration-300 hover:text-second"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-100 text-lg font-medium duration-300 hover:text-second"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
