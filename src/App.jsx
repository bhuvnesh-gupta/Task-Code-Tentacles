import React, { useEffect, useState } from "react";
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import HowTo from "./components/HowTo/HowTo";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import HotCollection from "./components/Collections/HotCollection";
import About from "./components/About/About";
import Partners from "./components/Partners/Partners";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element.classList]);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <Slider />
      <HowTo />
      <HotCollection />
      <About />
      <Partners />
    </div>
  );
};

export default App;
