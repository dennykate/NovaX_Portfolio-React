import { CardProps } from "../types";

type CardDataProps = {
  data: CardProps;
};

const CustomerBenefitCard = ({ data }: CardDataProps) => {
  return (
    <div
      className="bg-white min-w-[300px] max-w-[300px]  sm:px-6 px-5 py-5 flex flex-col items-center sm:gap-3 gap-2 rounded-lg shadow-lg
    border border-black border-opacity-10"
    >
      <div className="sm:h-[115px] h-[100px]">
        <img
          src={data?.image}
          alt="customer-benefit-img"
          className="h-full object-cover"
        />
      </div>
      <h3 className="font-[600] text-[16px] text-dark-blue">{data?.name}</h3>
      <p className="font-[400] text-center text-[16px] text-dark-blue leading-[21.79px]">
        {data?.description}
      </p>
    </div>
  );
};

export default CustomerBenefitCard;
