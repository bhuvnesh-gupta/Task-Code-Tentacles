/* eslint-disable react/prop-types */

const Cards = ({ imageSrc, title, aosDelay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className=" flex justify-center items-center
    ">
      <div className="box bg-green dark:bg-[#141b22] w-[100%] p-1 h-[100%] opacity-95 flex flex-col justify-center items-center">
        <div className=" w-[98%] h-[95%]  bg-[#f0f0f0] dark:bg-[#141b22] z-50">
          <img className="p-5" src={imageSrc} alt={title} />
          <p className="text-xl text-gray-700 dark:text-gray-200 pt-[14px] pb-[20px] pl-[20px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
