import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";

const SchoolTasksLeft = () => {
  return (
    <div className="flex space-x-4 items-start ">
      <div className=" text-black bg-[#a5a5a5] font-bold p-[5px] rounded-full mt-[10px]">
        <AiOutlineArrowLeft />
      </div>

      <div className="flex flex-col">
        <h1 className="text-lg">School November Tasks</h1>
        <h3 className="text-[#8c8c8f] text-[10px] tracking-wide mt-2 mb-3 ">
          Created by Instructor Day on November 31, 2022
        </h3>
        <div className="flex space-x-3  ">
          <button className="flex space-x-2 items-center rounded-lg bg-[var(--primary-main-color)] py-[4px] px-[10px]">
            <BsFillPersonPlusFill className="text-[14px]" />
            <span className="text-[12px]">Invite People</span>
          </button>
          <button className="py-[4px] px-[10px] text-[12px] tracking-wider border border-gray-400 rounded-lg">
            Private
          </button>
          <button className="py-[4px] px-[10px] text-[12px] tracking-wide rounded-lg bg-[var(--primary-main-color2)]">
            Edit
          </button>
          <button className="flex space-x-2 items-center py-[4px] px-[10px] border text-[12px] border-gray-400 rounded-lg">
            <FaComments />
            <span>45 Comments</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SchoolTasksLeft;
