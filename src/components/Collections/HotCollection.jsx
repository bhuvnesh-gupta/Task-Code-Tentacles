import Alien1 from "../../assets/images/Alien1.png";
import Alien2 from "../../assets/images/Alien2.png";
import Alien3 from "../../assets/images/Alien3.png";
import Alien4 from "../../assets/images/Alien4.png";
import Alien5 from "../../assets/images/Alien5.png";
import Alien6 from "../../assets/images/Alien6.png";
import Alien7 from "../../assets/images/Alien7.png";
import Alien8 from "../../assets/images/Alien8.png";
import CollectionCardList from "./CollectionCardList";

const HotCollection = () => {
  const cards = [
    {
      imageSrc: Alien1,
      title: "sKISIRS #02",
      aosDelay: "200",
    },
    {
      imageSrc: Alien2,
      title: "sKELATON #01",
      aosDelay: "400",
    },
    {
      imageSrc: Alien3,
      title: "sKISIRS #02",
      aosDelay: "600",
    },
    {
      imageSrc: Alien4,
      title: "sKISIRS #02",
      aosDelay: "800",
    },
    {
      imageSrc: Alien5,
      title: "sKISIRS #02",
      aosDelay: "200",
    },
    {
      imageSrc: Alien6,
      title: "sKELATON #01",
      aosDelay: "400",
    },
    {
      imageSrc: Alien7,
      title: "sKISIRS #02",
      aosDelay: "600",
    },
    {
      imageSrc: Alien8,
      title: "sKISIRS #02",
      aosDelay: "800",
    },
  ];

  return (
    <div>
      <div className="mt-[60px]" id="Collection">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:text-[44px] text-center sm:text-3xl md:text-3xl font-normal text-gray-700 dark:text-gray-200">
          Hot Collections
        </div>
        <div className="flex flex-col gap-5 justify-center items-center mt-[60px]">
          <CollectionCardList cards={cards.slice(0, 4)} />
          <CollectionCardList cards={cards.slice(4)} />
        </div>
      </div>
    </div>
  );
};

export default HotCollection;
