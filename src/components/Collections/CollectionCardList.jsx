/* eslint-disable react/prop-types */

import Cards from "./Cards";

const CollectionCardList = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center gap-[30px]">
      {cards.map((card, index) => (
        <Cards
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          aosDelay={card.aosDelay}
        />
      ))}
    </div>
  );
};

export default CollectionCardList;
