import { NavItemProps } from "../types";

type ItemProps = { item: NavItemProps; active: string };

const NavItem = ({ item, active }: ItemProps) => {
  return (
    <div className=" h-[50px] flex justify-center items-center relative ">
      <h6 className="font-[600] text-[16px] leading-[21.79px] menu-link text-dark-blue">
        {item.name}
      </h6>

      {active == item.name.toLowerCase() && (
        <div className="w-full h-[6px] absolute bottom-0 left-0 flex gap-[2px] items-center">
          <div className="w-full h-full bg-dark-blue rounded-full border-[1px] border-golden-yellow" />
          <div className="min-w-[8px] h-[8px] bg-golden-yellow border-[1px] border-dark-blue rounded-full" />
        </div>
      )}
    </div>
  );
};

export default NavItem;
