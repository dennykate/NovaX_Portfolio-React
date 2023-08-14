import { CustomerBenefitCard } from ".";
import { customerBenefitsData } from "../constants";
import { CardProps } from "../types";

const CustomerBenefits = () => {
  return (
    <div className="custom-main-container relative">
      <div className="w-full h-full absolute top-0 left-0  wave-bg -z-[10] " />

      <div className="custom-container ">
        <h3 className="heading-2 uppercase  md:text-center text-start mb-3 lg:px-0 sm:px-5 px-2">
          Customer Benefits
        </h3>
        <div className="max-w-[840px] mx-auto mb-5">
          <p className="paragraph-2 md:text-center  text-start lg:px-0 sm:px-5 px-2">
            Experience enhanced user delight through personalized efficiency and
            convenience while enjoying savings, rewards, and accessibility,
            supported by innovation and reliability, unlocking limitless growth
            opportunities
          </p>
        </div>
        <div className="flex flex-row w-full justify-start md:justify-center gap-6 pb-3 overflow-x-auto lg:px-0 sm:px-5 px-2 hide-scrollbar">
          {customerBenefitsData
            .slice(0, 3)
            .map((data: CardProps, i: number) => (
              <CustomerBenefitCard key={i} data={data} />
            ))}
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <div className="w-[300px]">
            <CustomerBenefitCard data={customerBenefitsData[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerBenefits;
