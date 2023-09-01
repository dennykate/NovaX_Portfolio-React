import { CardProps } from "../types";

type CardDataProps = {
  data: CardProps;
  index: number;
};

const ServiceCard = ({ data, index }: CardDataProps) => {
  const styles = useCustomStyle(index);

  return (
    <div
      className={`bg-white min-w-[300px] sm:px-6 px-5 py-3 flex flex-col items-center sm:gap-3 gap-2 rounded-lg shadow-lg
    ${styles.container} border border-black border-opacity-10`}
    >
      <div className="sm:h-[131px] h-[110px]">
        <img
          src={data?.image}
          alt="service-img"
          className="h-full object-cover"
        />
      </div>
      <h3 className="font-[700] sm:text-[21px] text-[18px] text-dark-blue text-center ">
        {data?.name}
      </h3>
      <p className="paragraph text-justify">{data?.description}</p>
    </div>
  );
};

const useCustomStyle = (index: number) => {
  const container =
    index == 1
      ? "lg:h-[102%]"
      : index == 2 && "lg:col-span-1 md:col-span-2 col-span-1";

  return {
    container,
  };
};

export default ServiceCard;
