import { sidebarData } from "@/utils/sidebarData";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarDataItem } from "@/typings";

const Sidebar = () => {
  return (
    <section className=" bg-[var(--foreground-color)] h-screen px-7 shadow-md ">
      <div className="flex justify-between items-center gap-10 py-7 ">
        <Logo />
        <GiHamburgerMenu className="cursor-pointer text-[var(--primary-main-color2)] text-2xl" />
      </div>
      <div className=" py-2 text-white">
        <span className="tracking-widest text-gray-300 text-sm">MAIN MENU</span>
        <div className="mt-4">
          {sidebarData.map((item: SidebarDataItem, index: number) => {
            const { logo, text, icon } = item;
            return (
              <div
                key={index}
                className="flex text-[var(--primary-main-color2)] items-center py-[7.5px] justify-between"
              >
                <div className="cursor-pointer flex gap-4 items-center">
                  <span className="text-xl">{logo}</span>
                  {text}
                </div>
                <span className="cursor-pointer text-xl">{icon}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
