import { HiXMark } from "react-icons/hi2";

import LogoDarkBlue from "../assets/logo-dark-blue.png";
import { navbarItems } from "../constants";

type SidebarProps = {
  active: string;
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
};

const Sidebar = ({ active, showSidebar, setShowSidebar }: SidebarProps) => {
  const styles = useCustomStyle(showSidebar, active);

  const onCloseHandler = () => setShowSidebar(false);

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 bg-white md:hidden flex flex-col z-[100] transition-300 
      ${styles.toggleSidebar}`}
    >
      <div className="w-full h-[60px] flex justify-between items-center  sm:px-2 px-6 ">
        <div className="h-[20px]">
          <img src={LogoDarkBlue} alt="logo" className="h-full object-cover" />
        </div>

        <button onClick={onCloseHandler}>
          <HiXMark size={22} className="text-dark-blue" />
        </button>
      </div>

      <div className="w-full flex justify-center mt-5">
        <div className="w-[50%] flex flex-col gap-5">
          {navbarItems.map(({ name, link, delay }, i) => (
            <a
              key={i}
              href={link}
              className={`w-full flex items-center ${styles.sideItemColor(name)}
              ${styles.sideItemAlign(i)} overflow-hidden`}
            >
              <h6
                className={`font-[400] text-[18px] leading-[24.51px] transition-500
                ${styles.sideItemAnimation(delay)}`}
              >
                {name}
              </h6>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const useCustomStyle = (showSidebar: boolean, active: string) => {
  const sideItemAlign = (i: number) =>
    i % 2 ? "justify-end" : "justify-start ";
  const sideItemAnimation = (delay: string) =>
    `${showSidebar ? "translate-y-0" : "translate-y-[100%]"} ${delay}`;
  const sideItemColor = (name: string) =>
    active == name.toLowerCase() ? "text-golden-yellow" : "text-dark-blue";
  const toggleSidebar = showSidebar
    ? " translate-x-0"
    : "translate-x-[-100%] delay-[1000ms]";

  return { sideItemAlign, sideItemAnimation, sideItemColor, toggleSidebar };
};

export default Sidebar;
