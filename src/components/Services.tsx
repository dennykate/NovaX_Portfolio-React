import { ServiceCard, WaypointContainer } from ".";
import { servicesData } from "../constants";
import { CardProps } from "../types";

const Services = () => {
  return (
    <WaypointContainer name="services">
      <div
        id="services"
        className="sm:min-h-screen flex justify-center items-center"
      >
        <div className="w-full py-5 bg-light-dark-blue">
          <div className="custom-container  overflow-hidden">
            <h3 className="heading-2 uppercase  md:text-center text-start mb-5 lg:px-2 sm:px-5 px-2 ">
              Services Offer
            </h3>
            <div className="flex flex-row flex-nowrap  gap-3 pb-3 overflow-x-auto xl:px-2 lg:px-2 sm:px-5 px-2 hide-scrollbar">
              {servicesData.map((data: CardProps, i: number) => (
                <ServiceCard key={i} index={i} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </WaypointContainer>
  );
};

export default Services;
