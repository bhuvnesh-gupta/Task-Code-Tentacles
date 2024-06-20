/* eslint-disable react/prop-types */

const SliderArrow = ({ className, onClick, direction }) => (
  <div
    className={`${className} absolute top-1/2 transform  bg-gray-900  p-2 rounded-full cursor-pointer hover:bg-gray-900 z-90 ${
      direction === "right" ? "right-0" : "left-0"
    }`}
    onClick={onClick}>
    <svg
      className="w-6 h-6 text-black"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"></svg>
  </div>
);

export default SliderArrow;
