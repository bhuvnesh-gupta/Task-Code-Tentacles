import Aliens from "../../assets/images/Aliens.png";
import { LINKS } from "../constants/Links";

const Slider = () => {
  return (
    <div id={LINKS.SLIDER}>
      <div className=" bg-black relative w-[100%] h-[940px] ">
        <img
          src={Aliens}
          alt="aliens"
          className="w-full h-full object-contain absolute opacity-80   "
        />
      </div>

      <div className="absolute top-[395px] left-0 w-full h-full flex flex-col justify-center items-center text-center text-[#ffffff] z-80">
        <div className=" w-full mx-auto px-4  ">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ">
              EXPLORE NFT COLLECTION
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-4 text-base text-gray-100 sm:text-lg md:text-xl lg:text-2xl leading-normal max-w-2xl mx-auto poppins">
              A collection of 2525 highly-fashionable NFTs on the ETH
              Blockchain. Unique, metaverse-ready, and designed to benefit their
              holders.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <button className=" bg-[#21E786] text-[#ffffff] text-base font-normal py-3 px-6 rounded hover:opacity-80">
                Connect Wallet
              </button>
              <button className=" border-2 text-base py-3 px-6 rounded border-[#21E786] hover:opacity-80">
                Whitelist Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
