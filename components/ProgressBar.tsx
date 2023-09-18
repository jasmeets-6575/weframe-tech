import React from "react";

type Props = {
  progressPercentage: number;
  color: string;
};

const ProgressBar = ({ progressPercentage, color }: Props) => {
  return (
    <div className="bg-[#1e1c3a] h-[10px] w-full rounded-full">
      <div
        className={`${color} h-[10px] rounded-full`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
