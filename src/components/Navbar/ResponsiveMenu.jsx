/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Navlinks } from "./Navbar";
import Logo from "./Logo";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between px-8 pb-6 pt-16 bg-[#f0f0f0] text-gray-700 dark:bg-[#141b22] dark:text-[#ffffff] transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
      <div className="card">
        <div className="flex items-center justify-start mr-5 gap-3">
          <Logo />
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
