import { BsThreeDotsVertical } from "react-icons/bs";
import ProgressBar from "../ProgressBar";

const SchoolTasksRight = () => {
  return (
    <section>
      <div className="flex flex-row-reverse items-start gap-3">
        <BsThreeDotsVertical className="text-lg mt-[10px]" />
        <div className="flex flex-col items-end">
          <h1 className="text-lg">Centered Martial Arts</h1>
          <h3 className="text-[#8c8c8f] text-[10px] tracking-wide mt-2 mb-3 ">
            Sunnyvale, Ca
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-end mr-7">Total Progress 60% </h1>
        <ProgressBar color="bg-[#6418c3]" progressPercentage={60} />
      </div>
    </section>
  );
};
export default SchoolTasksRight;
