"use client";
import Carousel from "./parts/Carousel";
import SectionWrapper from "@/app/components/global/Wrapper";
import { H3, P } from "@/app/components/global/Text";
import { useKeenSlider } from "keen-slider/react";
import GalleryNav from "./parts/CarouselArrow";

const thisYear = new Date().getFullYear();

export default function Throwback() {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 38,
    },
    loop: true,
  });

  return (
    <SectionWrapper id="throwback">
      <div className="block mb-[38px]">
        <H3 className="mb-3">
          Throwback{" "}
          <span className="text-primary-500">Antareja {thisYear - 1}</span>
        </H3>
        <P>Kami kembali untukmu di tahun {thisYear}!</P>
      </div>
      <div className="relative w-full">
        <div className="relative w-[97.8%]">
          <div ref={ref} className="keen-slider w-full h-[120%] mx-[21px]">
            <Carousel />
          </div>
        </div>
        <div className="absolute flex justify-between w-full top-20">
          <GalleryNav
            onClick={(e) => {
              instanceRef.current?.prev();
            }}
          />
          <GalleryNav
            onClick={(e) => {
              instanceRef.current?.next();
            }}
            right
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
