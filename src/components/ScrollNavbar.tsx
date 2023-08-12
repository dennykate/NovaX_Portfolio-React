import { Navbar } from ".";

import { useCustomScroll } from "../hooks";

const ScrollNavbar = () => {
  const scrollY = useCustomScroll();
  const styles = useStyle(scrollY);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-10 ${styles.navAnimation}`}
    >
      <Navbar scroll />
    </div>
  );
};

const useStyle = (scrollY: number) => {
  const navAnimation = scrollY > 100 ? "translate-y-0" : "translate-y-[-100%]";

  return {
    navAnimation,
  };
};

export default ScrollNavbar;
