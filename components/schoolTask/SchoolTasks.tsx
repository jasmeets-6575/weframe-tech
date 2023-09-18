import SchoolTasksLeft from "./SchoolTasksLeft";
import SchoolTasksRight from "./SchoolTasksRight";

const SchoolTasks = () => {
  return (
    <div className="flex items-start justify-between text-white bg-[var(--foreground-color)] rounded-lg py-3 px-[21px]">
      <SchoolTasksLeft />
      <SchoolTasksRight />
    </div>
  );
};
export default SchoolTasks;
