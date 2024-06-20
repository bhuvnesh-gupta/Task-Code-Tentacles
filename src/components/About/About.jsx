import { LINKS } from "../constants/Links";
import FeatureBox from "./FeatureBox";
import Story from "./Story";

const About = () => (
  <div
    className="about mt-[280px] flex justify-center items-center mx-auto"
    id={LINKS.ABOUT}>
    <div className="max-w-[1420px] w-full">
      <div className="flex flex-col lg:flex-row justify-center items-center text-gray-700 dark:text-gray-100 gap-[64px] mx-auto">
        <div className=" max-w-full lg:max-w-[50%] px-4">
          <h3
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-[44px] leading-[56px] md:text-2xl">
            THE STORY
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[18px] text-gray-700 dark:text-gray-300 font-base mt-4">
            Our collections priority is to reward NFT holders by developing
            utilities they can use in their current everyday life. Not in a
            hypothetical future.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap gap-5 mt-10">
            <Story label="Total Items" value="2240+" />
            <Story label="Profiles Whitelisted" value="1000+" />
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="300"
            className=" bg-[#21E786] text-white text-base font-normal pt-3 pb-3 pr-6 pl-6 mt-10 rounded hover:opacity-80">
            Read More
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:max-w-[50%] ">
          <div>
            <FeatureBox
              number="01"
              title="Daily Tokens"
              description="Earn interstellar tokens passively by staking your collectible NFT."
              aosDelay="500"
            />
            <FeatureBox
              number="02"
              title="Exclusive Discounts"
              description="Tokens and NFTs can be used for discounts at top fashion brands."
              aosDelay="700"
            />
          </div>
          <div>
            <FeatureBox
              number="03"
              title="VIP Access"
              description="Get exclusive access to upcoming drops and events."
              aosDelay="900"
            />
            <FeatureBox
              number="04"
              title="Community Perks"
              description="Join a community of like-minded individuals with exclusive perks."
              aosDelay="1100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
