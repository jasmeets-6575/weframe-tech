import { AiOutlineArrowLeft } from "react-icons/ai";

const SchoolTasksLeft = () => {
  return (
    <div className="flex">
      <span className="text-black bg-[#a5a5a5] font-bold p-[5px] rounded-full">
        <AiOutlineArrowLeft />
      </span>

      <div className="flex">
        <h1>School November Tasks</h1>
        <h3 className="text-[#8c8c8f] text-[8px]">
          Created by Instructor Day on November 31, 2022
        </h3>
      </div>
    </div>
  );
};
export default SchoolTasksLeft;
