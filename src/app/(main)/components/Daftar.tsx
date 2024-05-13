import { RightArrow } from "@/app/components/global/Icons";
import { SecondaryLinkButton } from "@/app/components/global/LinkButton";
import { H2 } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import Image from "next/image";

export default function Daftar() {
  return (
    <SectionWrapper>
      <div className="w-full"></div>
      <div className="relative w-full h-[425px] rounded-[30px] overflow-hidden text-wrap flex items-center justify-center md:justify-start">
        <div className="w-full sm:w-[378px] flex flex-col gap-6 z-10 ms-[29px] md:ms-[86px]">
          <H2 className="text-white font-bold">
            Buktikan kemampuan mu bersama Antareja
          </H2>
          <SecondaryLinkButton
            href="/auth/register"
            target="_blank"
            className="group w-[190px] hover:bg-primary-500 hover:text-white py-[12px] px-[20px] flex justify-center items-center"
          >
            <span className="flex gap-2 text-sm font-bold">
              Daftar Sekarang
              <RightArrow className="group-hover:translate-x-2 transition-all duration-300" />
            </span>
          </SecondaryLinkButton>
        </div>
        <div className="absolute w-full h-full bg-gradient-to-r from-primary-700/90 to-30% to-transparent object-cover">
          <Image
            src={"/image/paskidaftar.jpg"}
            width={1341}
            height={345}
            alt="paski"
            className="absolute object-cover w-full h-full -z-[999]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
