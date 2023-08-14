import HeroBg from "../assets/hero-bg.png";
import HeroBrain from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="custom-main-container ">
      <div className="custom-container flex flex-col justify-center items-center relative sm:px-0 px-2 ">
        <div
          id="hero-bg"
          className="sm:w-[400px] w-[100%] absolute sm:top-[225px] top-0 -z-10"
        >
          <img src={HeroBg} alt="hero-bg" className="w-full" />
        </div>

        <div className="sm:w-[225px] md:w-[180px] w-[120px]">
          <img src={HeroBrain} alt="hero-brain" className="w-full" />
        </div>
        <div className="max-w-[1036px] flex-1 mx-auto flex flex-col gap-3">
          <h3 className="heading text-center">
            Did you know that seamless technology integratio is a must for every
            thriving business?
          </h3>
          <div className="w-full md:px-24 sm:px-16  px-0">
            <p className="paragraph text-center">
              Empower your business with our core services for unparalleled
              success.
              <br className="md:block hidden" /> Expert guidance, innovative
              solutions, and a dedicated partnership await you. Achieve your
              goals and unlock your potential with "NOVAX". Let's embark on a
              journey of growth together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
