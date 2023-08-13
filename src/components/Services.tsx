import { ServiceCard } from ".";
import { servicesData } from "../constants";
import { CardProps } from "../types";

const Services = () => {
  return (
    <div className="w-full py-5 bg-light-dark-blue">
      <div className="custom-container  overflow-hidden">
        <h3 className="heading-2 uppercase  md:text-center text-start mb-5 lg:px-0 sm:px-5 px-2 ">
          Services Offer
        </h3>
        <div className="flex flex-row flex-nowrap  gap-3 pb-3 overflow-x-auto lg:px-0 sm:px-5 px-2 hide-scrollbar">
          {servicesData.map((data: CardProps, i: number) => (
            <ServiceCard key={i} index={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
