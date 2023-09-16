type Props = {
  color?: boolean;
  text: string;
  icon: React.ReactNode;
};

const NotificationComponent = ({ color, text, icon }: Props) => {
  return (
    <div className="relative">
      <div className="text-[var(--primary-main-color2)] text-2xl">{icon}</div>
      <span
        className={`text-sm absolute ${
          color ? "bg-[#e328af]" : "bg-[#5ecfff]"
        } px-[7px] rounded-full -top-[10px] text-[#0d0b21] -right-2 border border-[#15132b]`}
      >
        {text.toString()}
      </span>
    </div>
  );
};
export default NotificationComponent;
