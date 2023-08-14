import { CheckboxProps } from "../types";

type CheckboxDataProps = {
  data: CheckboxProps;
  platforms: string[];
  setPlatforms: (platform: string[]) => void;
};

const Checkbox = ({ data, platforms, setPlatforms }: CheckboxDataProps) => {
  const isExist = platforms.find((platform) => platform == data?.name);
  const styles = useCustomStyle(isExist);

  const onClickHandler = () => {
    if (isExist) {
      const newPlatforms: string[] = platforms.map((platform: string) => {
        if (platform != isExist) return platform;
      }) as string[];

      setPlatforms(newPlatforms);
    } else {
      setPlatforms([...platforms, data?.name]);
    }
  };

  return (
    <button onClick={onClickHandler} className="flex items-center w-auto gap-2">
      <div className="w-[18px] h-[18px]  flex justify-center items-center rounded-full border border-dark-blue bg-transparent">
        <div
          className={`w-[10px] h-[10px] rounded-full  border-[1px] border-dark-blue ${styles.checkboxDotColor}`}
        />
      </div>
      <p className="text-[14px] font-[400] text-dark-blue text-opacity-90 whitespace-nowrap">
        {data?.name}
      </p>
    </button>
  );
};

const useCustomStyle = (isExist: string | undefined) => {
  const checkboxDotColor = isExist ? "bg-golden-yellow" : "bg-light-dark-blue";

  return {
    checkboxDotColor,
  };
};

export default Checkbox;
