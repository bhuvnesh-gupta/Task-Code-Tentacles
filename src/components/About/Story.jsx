/* eslint-disable react/prop-types */
const Story = ({ label, value }) => (
  <div>
    <h6 className="text-xl text-gray-800 dark:text-gray-200  leading-5">
      {label}
    </h6>
    <p className="text-[56px] leading-[68px] text-gray-900 dark:text-gray-100 ">
      {value}
    </p>
  </div>
);

export default Story;
