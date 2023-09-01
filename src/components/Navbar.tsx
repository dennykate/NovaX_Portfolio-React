import { useState } from "react";
import { useSelector } from "react-redux";
import { BsTelephone } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";

import { NavbarItem, Sidebar } from ".";
import { navbarItems } from "../constants";
import { NavbarItemProps } from "../types";

import LogoDarkBlue from "../assets/logo-dark-blue.png";
import LogoWhite from "../assets/logo-white.png";

type NavbarProps = {
  scroll?: boolean;
};

const Navbar = ({ scroll }: NavbarProps) => {
  const styles = useCustomStyle(scroll);
  const { activeName } = useSelector((state: any) => state.navbarItem);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleBtnHandler = () => setShowSidebar((prev) => !prev);

  return (
    <div className={`w-full  ${styles.mainBgColor}`}>
      <div className=" custom-container md:h-[78px] h-[60px] flex justify-between items-center  lg:px-2 sm:px-2 px-6 ">
        <div className="md:h-[26px] h-[20px]">
          <img
            src={scroll ? LogoWhite : LogoDarkBlue}
            alt="logo"
            className="h-full object-cover"
          />
        </div>

        <div className="md:flex hidden items-center lg:gap-8 gap-4 ">
          {navbarItems.map((item: NavbarItemProps, index: number) => (
            <NavbarItem
              active={activeName}
              key={index}
              item={item}
              scroll={scroll}
            />
          ))}
        </div>

        <a
          href="tel:09964470356"
          className={`w-[178px] h-[42px]  rounded shadow-sm md:flex hidden justify-center items-center gap-4 ${styles.contactBtnBgColor}`}
        >
          <BsTelephone
            size={18}
            className={styles.contactBtnIconAndTextColor}
          />
          <h6
            className={`font-[400] text-[15px] ${styles.contactBtnIconAndTextColor}`}
          >
            Contact Us
          </h6>
        </a>

        <button className="md:hidden block" onClick={toggleBtnHandler}>
          <FaBarsStaggered size={22} className={styles.toggleBtnColor} />
        </button>
      </div>

      <Sidebar
        active={activeName}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </div>
  );
};

const useCustomStyle = (scroll: boolean | undefined) => {
  const mainBgColor = scroll ? "bg-dark-blue" : "bg-transparent";
  const contactBtnBgColor = scroll ? "bg-white" : "bg-dark-blue";
  const contactBtnIconAndTextColor = scroll ? "text-dark-blue" : "text-white";
  const toggleBtnColor = scroll ? "text-white" : "text-dark-blue";

  return {
    mainBgColor,
    contactBtnBgColor,
    contactBtnIconAndTextColor,
    toggleBtnColor,
  };
};

export default Navbar;
