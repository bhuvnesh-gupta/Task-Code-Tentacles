/* eslint-disable react/prop-types */
const FeatureBox = ({ number, title, description, aosDelay }) => (
  <div
    data-aos="fade-left"
    data-aos-delay={aosDelay}
    className=" rounded-lg m-5 text-center flex flex-col justify-center items-center">
    <div className="box bg-green  dark:bg-[#141b22] w-[100%] p-1 h-[100%] opacity-95 flex justify-center items-center">
      <div className="w-[98%] h-[95%]  bg-[#f0f0f0]  dark:bg-[#141b22] z-50">
        <h1 className="text-6xl font-bold text-red opacity-90 pt-2 text-[#21E786]">
          {number}
        </h1>
        <p className="text-2xl leading-8 font-semibold dark:text-gray-200">
          {title}
        </p>
        <p className="text-gray-700  dark:text-gray-200 text-center poppins text-lg leading-7 p-[30px]">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default FeatureBox;
