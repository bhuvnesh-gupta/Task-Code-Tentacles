/* eslint-disable react/no-unknown-property */

import StepsCard from "./StepsCard";
import { CardData } from "./CardData";
import "../../index.css";
const HowTo = () => {
  return (
    <div className="flex flex-col gap-[60px] justify-center items-center mt-[180px]">
      <h2
        data-aos="fade-up"
        dta-aos-delay="400"
        className="lg:text-[44px] sm:text-3xl md:text-3xl font-normal text-gray-700 dark:text-gray-200">
        HOW TO <span className="text-[#21E786]">NFTALIEN</span> WORK
      </h2>
      <div className="flex flex-wrap justify-center gap-[30px]">
        {CardData.map((step, index) => (
          <StepsCard
            key={index}
            imageSrc={step.imageSrc}
            stepNumber={step.stepNumber}
            description={step.description}
            aosDelay={step.aosDelay}
          />
        ))}
      </div>
    </div>
  );
};

export default HowTo;
