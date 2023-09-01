import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

import { WorkCard } from ".";
import { worksData } from "../constants";
import { WorkCardProps } from "../types";

const Works = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div
      id="works"
      className="w-full py-2 cursor-pointer bg-light-dark-blue select-none"
    >
      <Carousel
        slideSize="28%"
        loop
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "80%", slideGap: "sm" },
        ]}
      >
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
