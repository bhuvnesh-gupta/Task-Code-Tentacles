/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Logo from "./Logo";
import Discordicon from "../../assets/svg/Discordicon.svg";
import Wallet from "../../assets/svg/Wallet.svg";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 1,
    name: "ROADMAP",
    link: "/#ROADMAP",
  },
  {
    id: 1,
    name: "COLLECTION",
    link: "/#Collection",
  },
  {
    id: 1,
    name: "FAQS",
    link: "/#",
  },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      data-aos="fade-down"
      className="header w-full fixed top-0 z-[99] backdrop-blur-sm-relative  shadow-md p-2 bg-[#f0f0f0] text-gray-700 dark:bg-[#040B11] dark:text-[#ffffff] duration-300">
      <div className="container p-2 md:py-0">
        <div className="flex justify-between items-center">
          <div className="lg:ml-[120px]">
            <Logo />
          </div>
          <nav className="hidden md:block mr-[120px]">
            <ul className="flex justify-center items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4 pr-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-[#21e786] py-2 hover:border-b-2 hover:border-[#21e786] transition-colors duration-500  ">
                    {name}
                  </a>
                </li>
              ))}

              {theme === "dark" ? (
                <BiSolidMoon
                  onClick={() => setTheme("light")}
                  className="text-2xl  bg-[#141b22] w-12 h-12 p-3 rounded-[40px]  hover:opacity-80"
                />
              ) : (
                <BiSolidSun
                  onClick={() => setTheme("dark")}
                  className="text-2xl  bg-[#f0f0f0] w-12 h-12 p-3 rounded-[40px] hover:bg-[#f3f3f3] hover:border hover:border-gray-700"
                />
              )}
              <button className="flex bg-[#7289DA] text-base font-normal text-white dark:bg-[#141b22] dark:text-[#ffffff] pt-3 pb-3 pr-6 rounded hover:opacity-80">
                <img
                  className="pl-6 pr-[10px] mt-1"
                  src={Discordicon}
                  alt="discord"
                />
                <span>Discord</span>
              </button>
              <button className="flex  bg-[#21E786] text-black text-base font-normal pt-3 pb-3 pr-6 rounded hover:opacity-80">
                <img
                  className="pl-6 pr-[10px] mt-1 fill-white"
                  src={Wallet}
                  alt="connect"
                />
                <span>Connect</span>
              </button>
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* dark  mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
