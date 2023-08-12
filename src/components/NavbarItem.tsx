import { NavbarItemProps } from "../types";

type ItemProps = { item: NavbarItemProps; active: string; scroll?: boolean };

const NavbarItem = ({ item, active, scroll }: ItemProps) => {
  const isActive: boolean = active == item.name.toLowerCase();
  const styles = useCustomStyle(isActive, scroll);

  return (
    <div className=" h-[60px] flex justify-center items-center relative cursor-pointer group px-[2px]">
      <h6
        className={`font-[500] text-[16px] leading-[21.79px] tracking-wide custom-text-shadow ${styles.textColor}`}
      >
        {item.name}
      </h6>

      <div className="w-full py-1 absolute bottom-0 left-0 flex gap-[2px] items-center  ">
        <div
          className={`custom-box-shadow transition-all duration-300 ease-in-out h-[5px] rounded-full 
          ${styles.underBarColor} ${styles.underBarAnimation}`}
        />
        <div
          className={`custom-box-shadow transition-all duration-300 ease-out min-w-[8px] h-[8px] border-[1px] 
         rounded-full  delay-200 translate-y-[-0.3px] ${styles.underDotColor} ${styles.underDotAnimation}`}
        />
      </div>
    </div>
  );
};

const useCustomStyle = (isActive: boolean, scroll: boolean | undefined) => {
  const textColor = scroll ? "text-white" : "text-dark-blue";
  const underBarColor = scroll
    ? "bg-golden-yellow border-dark-blue"
    : "bg-dark-blue border-golden-yellow";
  const underDotColor = scroll
    ? "bg-white border-golden-yellow"
    : "bg-golden-yellow border-dark-blue";
  const underBarAnimation = isActive
    ? " w-full border-[1px]"
    : " w-0 border-0 group-hover:w-full group-hover:border-[1px]";
  const underDotAnimation = isActive
    ? "scale-110 translate-x-0"
    : "scale-0 translate-x-[-10px] group-hover:scale-110 group-hover:translate-x-0 ";

  return {
    textColor,
    underBarColor,
    underDotColor,
    underBarAnimation,
    underDotAnimation,
  };
};

export default NavbarItem;
