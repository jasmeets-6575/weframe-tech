import { VscSearch } from "react-icons/vsc";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import NotificationBar from "./NotificationBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[var(--foreground-color)] py-4 px-10 text-white ">
      <div className="relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search here"
          className="py-3 outline-none px-[50px] bg-[var(--primary-main-color3)] text-[#726f94] rounded-full w-[22rem]"
        />
        <span className="text-[#726f94] absolute left-[18px] top-[14px] text-xl">
          <VscSearch />
        </span>
      </div>

      <span className="text-[var(--primary-main-color)] text-xs tracking-wider">
        <a href="">OTHER MENUS</a>
      </span>

      <NotificationBar />

      <div className=" flex items-center justify-center space-x-3 py-3 outline-none px-4 bg-[var(--primary-main-color3)] text-white rounded-full ">
        <MdOutlineLanguage className="text-lg" />
        <h2 className="text-sm">ENGLISH</h2>
        <AiOutlineCaretDown className="text-[#6418c3]" />
      </div>

      <div className="flex space-x-3 justify-between items-center px-2 ">
        <div className=" bg-[#c4c4c4] w-[44px] h-[44px] rounded-lg"></div>
        <div className="h-full flex flex-col justify-between">
          <h4 className="text-[14px]">Instructor Day</h4>
          <h4 className="text-[#6418c3] text-[11px]">Super Admin</h4>
        </div>
        <AiOutlineCaretDown className="text-[#6418c3]" />
      </div>
    </div>
  );
};

export default Navbar;
