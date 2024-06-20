/* eslint-disable react/prop-types */
import "../../index.css";
const StepsCard = ({ imageSrc, stepNumber, title, description, aosDelay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className=" flex justify-center items-center  leading-5">
    <div className="box bg-green dark:bg-[#141b22] p-1 opacity-90 flex flex-col justify-center items-center   ">
      <div className="w-[98%] h-[98%] flex flex-col justify-center items-center p-6 bg-[#f0f0f0] dark:bg-[#141b22]  z-50">
        <img className="shadow-xl w-20 h-20" src={imageSrc} alt={title} />
        <h5 className="text-[#21E786] dark:text-[#21E786] m-3">{stepNumber}</h5>
        <p className="text-gray-700 dark:text-gray-200 -200 text-xl ">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default StepsCard;
