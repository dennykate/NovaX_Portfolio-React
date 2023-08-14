import OurValueThumbnail from "../assets/our-value.png";

const OurValue = () => {
  return (
    <div className="custom-main-container relative">
      <div className="w-full h-full absolute top-0 left-0  wave-bg -z-[10]" />
      <div
        className="custom-container flex items-start justify-center gap-5 lg:flex-row flex-col lg:px-0 sm:px-5 px-2 
      md:pt-[100px]"
      >
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <img
            src={OurValueThumbnail}
            alt="our-value"
            className="lg:w-full xs:w-[400px] w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-start lg:gap-5 gap-3">
          <h3 className="heading-2 uppercase  custom-text-shadow ">
            Our Value
          </h3>
          <p className="paragraph indent-14">
            NOVAX stands as an expert in web and app development, delivering
            exquisite and tailored solutions with cutting-edge technology. We're
            devoted to innovation, ensuring timely, high-quality, and
            mesmerizing results. With a customer-centric approach, we intently
            listen to your ideas, turning them into exceptional and breathtaking
            digital experiences. From sleek websites to robust mobile apps and
            custom software, we effortlessly make your dreams a splendid
            reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
