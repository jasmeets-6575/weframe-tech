import SchoolTasks from "@/components/schoolTask/SchoolTasks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[var(--background-color)] h-full mt-7 mx-10">
      <SchoolTasks />
    </div>
  );
}
