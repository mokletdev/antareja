import SectionWrapper from "@/app/components/global/Wrapper";
import Image from "next/image";
import { H2 } from "@/app/components/global/Text";
import { SecondaryLinkButton } from "@/app/components/global/LinkButton";
import { RightArrow } from "@/app/components/global/Icons";

export default function Daftar() {
  return (
    <SectionWrapper id={"daftar"}>
      <div className="w-full">
        <div className="relative w-full h-[345px] rounded-[30px] overflow-hidden text-wrap flex items-center">
          <div className="w-[378px] flex flex-col gap-6 z-10 ms-[86px]">
            <H2 className="text-white font-bold">
              Buktikan kemampuan mu bersama Antareja
            </H2>
            <SecondaryLinkButton
              href="#"
              target="_blank"
              className="group w-[190px] hover:bg-primary-500 hover:text-white py-[12px] px-[20px] flex justify-center items-center"
            >
              <span className="flex gap-2 text-sm font-bold">
                Daftar Sekarang
                <RightArrow className="group-hover:translate-x-2 transition-all duration-300" />
              </span>
            </SecondaryLinkButton>
          </div>
          <div className="absolute w-full h-full bg-gradient-to-r from-primary-500/70 to-30% to-transparent object-cover"></div>
          <Image
            src={"/image/paski.jpg"}
            width={1341}
            height={345}
            alt="paski"
            className="absolute object-cover w-full h-[345px] -z-[999]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
