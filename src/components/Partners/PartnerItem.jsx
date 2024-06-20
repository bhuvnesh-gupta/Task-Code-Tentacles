/* eslint-disable react/prop-types */

const PartnerItem = ({ logo, name, index }) => {
  const bgColorClass =
    index % 2 === 0
      ? `bg-gray-400 dark:bg-[#141b22]`
      : `bg-gray-500 dark:bg-[#040B11]`;
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className={`flex items-center m-auto justify-center pt-[20px] pb-[20px] pr-[24px] pl-[24px] rounded hover:opacity-50 ${bgColorClass}`}>
      <img src={logo} alt={name} className="max-h-12" />
    </div>
  );
};

export default PartnerItem;
