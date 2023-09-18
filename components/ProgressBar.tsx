import React from "react";

type Props = {
  progressPercentage: number;
  color: string;
};

const ProgressBar = ({ progressPercentage, color }: Props) => {
  return (
    <div className="bg-[#1e1c3a] h-3 w-full rounded-full">
      <div
        className={`${color} h-3 rounded-full`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
