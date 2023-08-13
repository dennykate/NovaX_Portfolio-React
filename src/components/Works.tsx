import { Carousel } from "@mantine/carousel";

import { WorkCard } from ".";
import { worksData } from "../constants";
import { WorkCardProps } from "../types";

const Works = () => {
  return (
    <div className="w-full py-2 cursor-pointer bg-light-dark-blue select-none">
      <Carousel slideSize="28%" slideGap="md" loop withControls={false}>
        {worksData.map((data: WorkCardProps, i: number) => (
          <Carousel.Slide key={i}>
            <WorkCard data={data} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Works;
