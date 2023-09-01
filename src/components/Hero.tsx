import { WaypointContainer } from ".";
import { FadeUp, Fade, FadeLeft } from "./FramerAnimation";

import HeroBg from "../assets/hero-bg.png";
import HeroBrain from "../assets/hero.png";

const Hero = () => {
  return (
    <WaypointContainer name="home">
      <div
        id="home"
        className="custom-main-container min-h-screen sm:block flex justify-center items-center"
      >
        <div className="custom-container flex flex-col justify-center items-center relative sm:px-0 px-2 ">
          <div
            id="hero-bg"
            className="sm:w-[500px] w-[100%] absolute sm:top-[200px] top-0 -z-10"
          >
            <img src={HeroBg} alt="hero-bg" className="w-full" />
          </div>

          <FadeUp>
            <div className="sm:w-[225px] md:w-[180px] w-[120px]">
              <img src={HeroBrain} alt="hero-brain" className="w-full" />
            </div>
          </FadeUp>
          <FadeLeft>
            <div className="max-w-[1036px] flex-1 mx-auto flex flex-col gap-3">
              <h3 className="heading text-center">
                Did you know that seamless technology integratio is a must for
                every thriving business?
              </h3>
              <div className="w-full md:px-24 sm:px-16  px-0">
                <p className="paragraph text-center">
                  Empower your business with our core services for unparalleled
                  success.
                  <br className="md:block hidden" /> Expert guidance, innovative
                  solutions, and a dedicated partnership await you. Achieve your
                  goals and unlock your potential with "NOVAX". Let's embark on
                  a journey of growth together.
                </p>
              </div>
            </div>
          </FadeLeft>
        </div>
      </div>
    </WaypointContainer>
  );
};

export default Hero;
