import { FcSettings } from "react-icons/fc";
import { BiSolidTachometer, BiChevronRight } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { PiChatsCircleBold, PiSquaresFour } from "react-icons/pi";
import { MdContacts } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GiShop } from "react-icons/gi";
import { LuListVideo } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";
import { SidebarDataItem } from "@/typings";

export const sidebarData: SidebarDataItem[] = [
  {
    logo: <BiSolidTachometer />,
    text: "Dashboard",
  },
  {
    logo: <HiMail />,
    text: "Email",
    icon: <BiChevronRight />,
  },
  {
    logo: <PiChatsCircleBold />,
    text: "Chat",
  },
  {
    logo: <PiSquaresFour />,
    text: "Kanban",
    icon: <BiChevronRight />,
  },
  {
    logo: <MdContacts />,
    text: "Contact",
  },
  {
    logo: <SlCalender />,
    text: "Calendar",
  },
  {
    logo: <LuListVideo />,
    text: "Courses",
    icon: <BiChevronRight />,
  },
  {
    logo: <GiShop />,
    text: "Shop",
  },
  {
    logo: <TbFileInvoice />,
    text: "Invoices",
    icon: <BiChevronRight />,
  },
  {
    logo: <FcSettings />,
    text: "Settings",
  },
];
