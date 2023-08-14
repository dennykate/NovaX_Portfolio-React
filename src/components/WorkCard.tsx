import { WorkCardProps } from "../types";

type CardDataProps = {
  data: WorkCardProps;
};

const WorkCard = ({ data }: CardDataProps) => {
  return (
    <div className="flex items-center gap-5">
      <div className="lg:h-[126px] md:h-[100px] h-[80px]">
        <img src={data?.image} alt="work-1" className="h-full object-cover" />
      </div>
      <h6 className="text-[18px] font-[500] text-dark-blue custom-text-shadow uppercase">
        {data?.name}
      </h6>
    </div>
  );
};

export default WorkCard;
