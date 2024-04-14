import { useLocation } from "react-router-dom";

import { mempool } from "../constants/images";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./layout/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed border top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#terminal">
          <img src={mempool} width={150} height={40} alt="Mempool-Terminal" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex  lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-sans text-2xl uppercase text-n-1 hover: transition duration-300 transform hover:translate-y-[-4px] ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-gradient"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={() => setOpenNavigation((prev) => !prev)}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
