import { useState } from "react";
import { BsTelephone } from "react-icons/bs";

import Logo from "../assets/logo.png";
import { NavItem } from ".";
import { navItems } from "../constants";
import { NavItemProps } from "../types";

const Navbar = () => {
  const [active, setActive] = useState<string>("home");

  return (
    <div className="w-full">
      <div className=" container h-[78px] flex justify-between items-center">
        <div className="h-[26px]">
          <img src={Logo} alt="logo" className="h-full object-cover" />
        </div>

        <div className="flex items-center gap-10 ">
          {navItems.map((item: NavItemProps, index: number) => (
            <NavItem key={index} item={item} active={active} />
          ))}
        </div>

        <a
          href="tel:09964470356"
          className="w-[178px] h-[42px] bg-dark-blue rounded shadow-sm flex justify-center items-center gap-4"
        >
          <BsTelephone size={18} className="bg-transparent text-white" />
          <h6 className="font-[400] text-[15px] bg-transparent text-white">
            Contact Us
          </h6>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
