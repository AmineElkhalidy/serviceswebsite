import React from "react";

// Menu icon
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

// Logo
import Amine from "../../../assets/images/Amine.png";

const Header = () => {
  // Nav state
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full bg-main">
      <nav className="h-20 max-w-6xl mx-auto px-6 flex justify-between items-center duration-300 2xl:px-O">
        <a
          className={
            "text-gray-100 inline-flex items-center gap-1 text-lg font-medium"
          }
        >
          <img className="h-[2rem]" src={Amine} alt="Header logo" />
          <span>Amine Elkhalidy</span>
        </a>

        <a
          href="mailto:a.amineelkhalidy@gmail.com"
          className="hidden text-gray-100 font-medium items-center gap-2 md:inline-flex"
        >
          a.amineelkhalidy@gmail.com
          <span>
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
