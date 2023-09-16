import NotificationComponent from "./NotificationComponent";
import { BiSolidBell, BiSolidMessageSquareDetail } from "react-icons/bi";
import { LuListVideo } from "react-icons/lu";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";

const NotificationBar = () => {
  return (
    <div className="flex space-x-4">
      <NotificationComponent text={"9"} icon={<BiSolidBell />} />
      <NotificationComponent text={"5"} icon={<LuListVideo />} />
      <NotificationComponent
        text={"2"}
        icon={<HiMiniClipboardDocumentCheck />}
      />
      <NotificationComponent
        color={true}
        text={"!"}
        icon={<BiSolidMessageSquareDetail />}
      />
    </div>
  );
};
export default NotificationBar;
